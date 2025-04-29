import { useDispatch, useSelector } from 'react-redux';
import { applyFilters, setComplexity } from 'widgets/QuestionsFilters/model/filterSlice.ts';
import type { RootState } from 'app/store/store.ts';
import s from './ChooseQuestionsComplexity.module.css';

const levels: [number, number][] = [
  [1, 3],
  [4, 6],
  [7, 8],
  [9, 10],
];

export const ChooseQuestionsComplexity = () => {
  const dispatch = useDispatch();
  const complexity = useSelector((state: RootState) => state.search.complexity);
  const allQuestions = useSelector((state: RootState) => state.search.rawQuestions);

  const handleClick = (range: [number, number]) => {
    dispatch(setComplexity(complexity?.[0] === range[0] && complexity?.[1] === range[1] ? null : range));
    dispatch(applyFilters(allQuestions));
  };

  return (
    <div className={s.wrapper}>
      <span className={s.title}>Уровень сложности</span>
      <div className={s.list}>
        {levels.map((range) => (
          <button
            key={range.join('-')}
            className={`${s.tag} ${complexity?.[0] === range[0] && complexity?.[1] === range[1] ? s.active : ''}`}
            onClick={() => handleClick(range)}
          >
            {range[0]}–{range[1]}
          </button>
        ))}
      </div>
    </div>
  );
};
