import type { RootState } from 'app/store/store.ts';
import type { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilters, setSearchQuery } from 'widgets/QuestionsFilters';

import s from './ChooseQuestionsSearch.module.css';
import searchIcon from 'shared/assets/SearchIcon.svg';

export const ChooseQuestionsSearch = () => {
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const allQuestions = useSelector((state: RootState) => state.search.rawQuestions);

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
    dispatch(applyFilters(allQuestions));
  };
  return (
    <div className={s.searchWrapper}>
      <div className={s.iconWrapper}>
        <img src={searchIcon} alt="Search icon" />
      </div>
      <input className={s.searchInput} placeholder="Введите запрос..." value={searchQuery} onChange={handleChange} />
    </div>
  );
};
