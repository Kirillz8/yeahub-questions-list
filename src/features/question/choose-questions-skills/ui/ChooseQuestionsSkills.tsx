import type { RootState } from 'app/store/store.ts';
import { useGetSkillsQuery } from 'entities/getQuestionsSkills/api/questionsSkillsApi.ts';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilters, setSkills } from 'widgets/QuestionsFilters/model/filterSlice.ts';

import s from './ChooseQuestionsSkills.module.css';

export const ChooseQuestionsSkills = () => {
  const dispatch = useDispatch();
  const { data } = useGetSkillsQuery();
  const skills = data?.data ?? [];
  const selected = useSelector((state: RootState) => state.search.skills);
  const allQuestions = useSelector((state: RootState) => state.search.rawQuestions);
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? skills : skills.slice(0, 8);

  const handleClick = (id: number) => {
    dispatch(setSkills(id === selected ? null : id));
    dispatch(applyFilters(allQuestions));
  };

  return (
    <div className={s.wrapper}>
      <span className={s.title}>Навыки</span>
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
      {skills.length > 5 && (
        <button className={s.showMore} onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? 'Скрыть' : 'Посмотреть все'}
        </button>
      )}
    </div>
  );
};
