import { QuestionShortCard } from 'entities/questions/ui/QuestionShortCard/QuestionShortCard.tsx';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useGetPublicQuestionsQuery } from 'entities/questions/api/publicQuestionsApi';
import { Pagination } from 'shared/Pagination';
import { applyFilters, setRawQuestions } from 'widgets/QuestionsFilters';
import type { RootState } from 'app/store/store';

import s from './QuestionsList.module.css';

export const QuestionsList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || '1');
  const limit = 10;

  const { data, isLoading } = useGetPublicQuestionsQuery({ page: 1, limit: 2000 });
  const filteredQuestions = useSelector((state: RootState) => state.search.filteredQuestions);

  useEffect(() => {
    if (data?.data) {
      dispatch(setRawQuestions(data.data));
      dispatch(applyFilters(data.data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    setSearchParams({ page: '1' });
  }, [filteredQuestions]);

  const paginated = filteredQuestions.slice((page - 1) * limit, page * limit);

  return (
    <div className={s.questionListWrapper}>
      {paginated.length === 0 && !isLoading ? (
        <div className={s.emptyState}>
          <p>По вашему запросу вопросов не найдено.</p>
        </div>
      ) : (
        <ul className={s.questionsList}>
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => <li key={i} className={s.skeletonCard} />)
            : paginated.map((q) => <QuestionShortCard key={q.id} question={q} />)}
        </ul>
      )}
      <Pagination limit={limit} currentPage={page} total={filteredQuestions.length} />
    </div>
  );
};
