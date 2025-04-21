import { useDispatch, useSelector } from 'react-redux';
import { setComplexity } from 'widgets/QuestionsFilters/model/filterSlice';
import type { RootState } from 'app/store/store';
import s from './QuestionsComplexity.module.css';

const levels: [number, number][] = [
  [1, 3],
  [4, 6],
  [7, 8],
  [9, 10],
];

export const QuestionsComplexity = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.search.complexity);

  const handleClick = (range: [number, number]) => {
    dispatch(setComplexity(selected?.[0] === range[0] && selected?.[1] === range[1] ? null : range));
  };

  return (
    <div className={s.wrapper}>
      <span className={s.title}>Уровень сложности</span>
      <div className={s.list}>
        {levels.map((range) => (
          <button
            key={range.join('-')}
            className={`${s.tag} ${selected?.[0] === range[0] && selected?.[1] === range[1] ? s.active : ''}`}
            onClick={() => handleClick(range)}
          >
            {range[0]}–{range[1]}
          </button>
        ))}
      </div>
    </div>
  );
};
