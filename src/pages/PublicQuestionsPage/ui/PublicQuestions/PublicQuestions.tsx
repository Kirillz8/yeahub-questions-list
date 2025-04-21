import { QuestionsList } from 'entities/questions';
import { QuestionsFilters } from 'widgets/QuestionsFilters';
import s from './PublicQuestions.module.css';

export const PublicQuestions = () => {
  return (
    <section className={s.questionsWrapper}>
      <QuestionsList />
      <QuestionsFilters />
    </section>
  );
};
