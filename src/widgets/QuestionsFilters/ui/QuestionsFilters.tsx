import { useGetSpecializationQuery } from 'entities/getQuestionsSpecializations/api/questionsSpecializationsApi.ts';
import { ChooseQuestionsSearch, ChooseQuestionsSpecializations } from 'features/question';
import { ChooseQuestionsComplexity } from 'features/question/choose-questions-complexity/ui/ChooseQuestionsComplexity.tsx';
import { ChooseQuestionRate } from 'features/question/choose-questions-rate/ui/ChooseQuestionRate.tsx';
import { ChooseQuestionsSkills } from 'features/question/choose-questions-skills/ui/ChooseQuestionsSkills.tsx';

import { QuestionsFiltersSkeleton } from 'widgets/QuestionsFilters';
import s from './QuestionsByFilters.module.css';

export const QuestionsFilters = () => {
  const { isLoading } = useGetSpecializationQuery();

  return (
    <>
      {isLoading ? (
        <QuestionsFiltersSkeleton />
      ) : (
        <div className={s.questionFilterWrapper}>
          <ChooseQuestionsSearch />
          <ChooseQuestionsSpecializations />
          <ChooseQuestionsSkills />
          <ChooseQuestionsComplexity />
          <ChooseQuestionRate />
        </div>
      )}
    </>
  );
};
