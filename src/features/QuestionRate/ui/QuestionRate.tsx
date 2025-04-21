import { useDispatch, useSelector } from 'react-redux';
import { setRate } from 'widgets/QuestionsFilters/model/filterSlice';
import type { RootState } from 'app/store/store';
import s from './QuestionsRate.module.css';

export const QuestionsRate = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.search.rate);

  return (
    <div className={s.wrapper}>
      <span className={s.title}>Рейтинг</span>
      <div className={s.list}>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            className={`${s.tag} ${selected === value ? s.active : ''}`}
            onClick={() => dispatch(setRate(selected === value ? null : value))}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};
