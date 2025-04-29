import type { RootState } from 'app/store/store.ts';
import { useGetSpecializationQuery } from 'entities/getQuestionsSpecializations/api/questionsSpecializationsApi.ts';
import type { QuestionSpecialization } from 'entities/getQuestionsSpecializations/model/SpecializationResponseType.ts';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilters, setSpecialization } from 'widgets/QuestionsFilters/model/filterSlice.ts';

import s from './ChooseQuestionsSpecializations.module.css';

export const ChooseQuestionsSpecializations = () => {
  const dispatch = useDispatch();
  const { data } = useGetSpecializationQuery();
  const specializations = data?.data ?? [];

  const selected = useSelector((state: RootState) => state.search.specialization);
  const allQuestions = useSelector((state: RootState) => state.search.rawQuestions);

  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? specializations : specializations.slice(0, 5);

  const handleClick = (id: number) => {
    dispatch(setSpecialization(id === selected ? null : id));
    dispatch(applyFilters(allQuestions));
  };

  return (
    <div className={s.wrapper}>
      <span className={s.title}>Специализация</span>
      <div className={s.list}>
        {visibleItems.map((item: QuestionSpecialization) => (
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
