import { QuestionsComplexity } from 'features/QuestionComplexity/ui/QuestionComplexity.tsx';
import { QuestionsRate } from 'features/QuestionRate/ui/QuestionRate.tsx';
import { QuestionsSkills } from 'features/QuestionSkills/ui/QuestionsSkills.tsx';
import { QuestionsSpecializations, useGetSpecializationQuery } from 'features/QuestionSpecializations';
import { QuestionsSearch } from 'features/QuestionsSearch';
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
          <QuestionsSearch />
          <QuestionsSpecializations />
          <QuestionsSkills />
          <QuestionsComplexity />
          <QuestionsRate />
        </div>
      )}
    </>
  );
};
