import type { RootState } from 'app/store/store.ts';
import { useGetSpecializationQuery } from 'features/QuestionSpecializations/api/questionsSpecializationsApi.ts';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSpecialization } from 'widgets/QuestionsFilters/model/filterSlice.ts';

import s from './QuestionsSpecializations.module.css';

export const QuestionsSpecializations = () => {
  const dispatch = useDispatch();
  const { data } = useGetSpecializationQuery();
  const specializations = data?.data ?? [];

  const selected = useSelector((state: RootState) => state.search.specialization);
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? specializations : specializations.slice(0, 5);

  const handleClick = (id: number) => {
    dispatch(setSpecialization(id === selected ? null : id)); // сброс при повторном клике
  };

  return (
    <div className={s.wrapper}>
      <span className={s.title}>Специализация</span>
      <div className={s.list}>
        {visibleItems.map((item) => (
          <button
            key={item.id}
            className={`${s.tag} ${selected === item.id ? s.active : ''}`}
            onClick={() => handleClick(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      {specializations.length > 5 && (
        <button className={s.showMore} onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? 'Скрыть' : 'Посмотреть все'}
        </button>
      )}
    </div>
  );
};
