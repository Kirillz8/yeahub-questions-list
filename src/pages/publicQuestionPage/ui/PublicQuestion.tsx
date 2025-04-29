import { QuestionLongCardMain } from 'entities/questions/ui/QuestionLongCardMain/QuestionLongCardMain.tsx';
import { QuestionLongCardSidebar } from 'entities/questions/ui/QuestionLongCardSidebar/QuestionLongCardSidebar.tsx';

import s from './PublicQuestion.module.css';

export const PublicQuestion = () => {
  return (
    <div className={s.page}>
      <QuestionLongCardMain />
      <QuestionLongCardSidebar />
    </div>
  );
};
