import parse from 'html-react-parser';
import { useGetPublicQuestionsByIdQuery } from 'pages/publicQuestionPage';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import s from './QuestionLongCardMain.module.css';

export const QuestionLongCardMain = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const { data: question, isLoading } = useGetPublicQuestionsByIdQuery({ id: Number(id) });

  if (isLoading || !question) {
    return <div className={s.loading}>Загрузка...</div>;
  }

  return (
    <div className={s.main}>
      <button className={s.back} onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <div className={s.content}>
        <div className={s.card}>
          <div className={s.questionHeader}>
            <img className={s.image} src={question.imageSrc} alt={'Каритнка вопроса'} />
            <div className={s.textContent}>
              <h1 className={s.title}>{question.title}</h1>
              <p className={s.description}>{question.description}</p>
            </div>
          </div>
        </div>

        <div className={s.card}>
          <h2 className={s.titleAnswer}>Краткий ответ</h2>
          <div className={s.text}>{parse(question.shortAnswer)}</div>
        </div>

        <div className={s.card}>
          <h2 className={s.titleAnswer}>Развёрнутый ответ</h2>
          <div className={`${s.text} ${!expanded ? s.collapsed : ''}`}>{parse(question.longAnswer)}</div>
          <div className={s.toggleWrapper}>
            <button className={s.toggle} onClick={() => setExpanded((p) => !p)}>
              {expanded ? 'Свернуть ↑' : 'Развернуть ↓'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
