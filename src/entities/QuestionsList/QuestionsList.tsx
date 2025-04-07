import { PublicQuestion } from './PublicQuestion/ui/PublicQuestion.tsx';
import { useGetPublicQuestionsQuery } from '../../pages/PublicQuestions/api/publicQuestionsApi.ts';
import type { Question } from '../../pages/PublicQuestions/model/types.ts';
import s from './QuestionsList.module.css';

export const QuestionsList = () => {
  const { data, error, isLoading } = useGetPublicQuestionsQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при получении данных</div>;

  return (
    <div className={s.questionListWrapper}>
      <h1 className={s.title}>Вопросы</h1>
      <ul className={s.questionsList}>
        {data?.data.map((question: Question) => (
          <>
            <PublicQuestion question={question} />
          </>
        ))}
      </ul>
    </div>
  );
};
