import type { QuestionSkill } from 'entities/questions/model/types.ts';
import { useGetPublicQuestionsByIdQuery } from 'pages/publicQuestionPage';
import { useParams } from 'react-router-dom';

import s from './QuestionLongCardSidebar.module.css';

export const QuestionLongCardSidebar = () => {
  const { id } = useParams<{ id: string }>();

  const { data: question, isLoading } = useGetPublicQuestionsByIdQuery({ id: Number(id) });

  if (isLoading || !question) {
    return <div className={s.loading}>Загрузка...</div>;
  }

  return (
    <>
      <div className={s.sidebar}>
        <div className={s.card}>
          <span className={s.label}>Уровень</span>
          <div className={s.levelWrapper}>
            <div className={s.level}>
              Сложность: <span className={s.levelNumber}>{question.complexity}</span>
            </div>
            <div className={s.level}>
              Рейтинг: <span className={s.levelNumber}>{question.rate}</span>
            </div>
          </div>

          <div>
            <span className={s.label}>Навыки:</span>
            {question.questionSkills.map((q: QuestionSkill) => (
              <div className={s.tagSkills}>
                <img src={question.imageSrc} alt="" />
                <span key={q.id}>{q.title}</span>
              </div>
            ))}
          </div>

          <div>
            <span className={s.label}>Ключевые слова:</span>
            {question.keywords.map((kw: string, i: number) => (
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
    </>
  );
};
