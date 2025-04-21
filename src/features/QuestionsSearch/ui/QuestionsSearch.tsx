import type { RootState } from 'app/store/store.ts';
import type { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from 'widgets/QuestionsFilters';

import s from './QuestionsSearch.module.css';
import searchIcon from 'shared/assets/SearchIcon.svg';

export const QuestionsSearch = () => {
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
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
