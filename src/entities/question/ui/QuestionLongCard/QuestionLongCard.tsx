import { useGetPublicQuestionsByIdQuery } from 'pages/publicQuestion';
import { useState } from 'react';
import parse from 'html-react-parser';
import { useNavigate, useParams } from 'react-router-dom';

import s from './QuestionLongCard.module.css';

export const QuestionLongCard = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const { data: question, isLoading } = useGetPublicQuestionsByIdQuery({ id: Number(id) });

  if (isLoading || !question) {
    return <div className={s.loading}>Загрузка...</div>;
  }

  return (
    <div className={s.page}>
      <button className={s.back} onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <div className={s.main}>
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

        <div className={s.sidebar}>
          <div className={s.card}>
            <div className={s.meta}>
              <span className={s.label}>Уровень</span>
              <div className={s.levelWrapper}>
                <div className={s.level}>
                  Сложность: <span className={s.levelNumber}>{question.complexity}</span>
                </div>
                <div className={s.level}>
                  Рейтинг: <span className={s.levelNumber}>{question.rate}</span>
                </div>
              </div>
            </div>

            <div>
              <span className={s.label}>Навыки:</span>
              {question.questionSkills.map((q) => (
                <div className={s.tagSkills}>
                  <img src={question.imageSrc} alt="" />
                  <span key={q.id}>{q.title}</span>
                </div>
              ))}
            </div>

            <div>
              <span className={s.label}>Ключевые слова:</span>
              {question.keywords.map((kw, i) => (
                <span className={s.tag} key={i}>
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          <div className={s.author}>
            Автор: <span className={s.authorText}>{question.createdBy.username}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
