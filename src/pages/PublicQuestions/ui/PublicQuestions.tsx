import { QuestionsList } from '../../../entities/QuestionsList/QuestionsList.tsx';
import s from './PublicQuestions.module.css';

export const PublicQuestions = () => {
  return (
    <section className={s.questionsWrapper}>
      <QuestionsList />
    </section>
  );
};
