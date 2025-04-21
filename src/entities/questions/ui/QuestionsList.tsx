import type { RootState } from 'app/store/store.ts';
import { type Question, QuestionShortCard } from 'entities/question';
import { Pagination } from 'features/Pagination';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'shared/hooks';
import { useGetPublicQuestionsQuery } from 'entities/questions/api/publicQuestionsApi';

import s from './QuestionsList.module.css';

export const QuestionsList = () => {
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const selectedSpecialization = useSelector((state: RootState) => state.search.specialization);
  const selectedSkills = useSelector((state: RootState) => state.search.skills);
  const selectedRate = useSelector((state: RootState) => state.search.rate);
  const selectedComplexity = useSelector((state: RootState) => state.search.complexity);

  const debouncedSearch = useDebounce(searchQuery, 500);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || '1');
  const limit = 10;

  const shouldFetchAll =
    debouncedSearch.trim().length > 0 ||
    selectedSpecialization !== null ||
    selectedSkills !== null ||
    selectedRate !== null ||
    selectedComplexity !== null;

  const { data: pageData, isLoading: loadingPage } = useGetPublicQuestionsQuery({ page, limit });
  const { data: allData, isLoading: loadingAll } = useGetPublicQuestionsQuery(
    { page: 1, limit: pageData?.total ?? 0 },
    { skip: !shouldFetchAll || pageData?.total === undefined },
  );

  const source = shouldFetchAll ? (allData?.data ?? []) : (pageData?.data ?? []);

  const filtered = shouldFetchAll
    ? source.filter((q: Question) => {
        const matchQuery = q.title.toLowerCase().includes(debouncedSearch.toLowerCase());
        const matchSpec =
          !selectedSpecialization || q.questionSpecializations.some((s) => s.id === selectedSpecialization);
        const matchSkills = !selectedSkills || q.questionSkills?.some((s) => s.id === selectedSkills);
        const matchRate = !selectedRate || q.rate === selectedRate;
        const matchComplexity =
          !selectedComplexity || (q.complexity >= selectedComplexity[0] && q.complexity <= selectedComplexity[1]);

        return matchQuery && matchSpec && matchSkills && matchRate && matchComplexity;
      })
    : source;

  const totalCount = shouldFetchAll ? filtered.length : (pageData?.total ?? 0);
  const paginated = shouldFetchAll ? filtered.slice((page - 1) * limit, (page - 1) * limit + limit) : source;

  useEffect(() => {
    if (shouldFetchAll) {
      setSearchParams({ page: '1' });
    }
  }, [debouncedSearch, selectedSpecialization, selectedSkills, selectedRate, selectedComplexity]);

  const isLoading = loadingPage || (shouldFetchAll && loadingAll);

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
            : paginated.map((q: Question) => <QuestionShortCard key={q.id} question={q} />)}
        </ul>
      )}
      <Pagination limit={limit} currentPage={page} total={totalCount} />
    </div>
  );
};
