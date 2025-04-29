import { useDispatch, useSelector } from 'react-redux';
import { applyFilters, setRate } from 'widgets/QuestionsFilters/model/filterSlice.ts';
import type { RootState } from 'app/store/store.ts';
import s from './ChooseQuestionRate.module.css';

export const ChooseQuestionRate = () => {
  const dispatch = useDispatch();
  const rate = useSelector((state: RootState) => state.search.rate);
  const allQuestions = useSelector((state: RootState) => state.search.rawQuestions);

  return (
    <div className={s.wrapper}>
      <span className={s.title}>Рейтинг</span>
      <div className={s.list}>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            className={`${s.tag} ${rate === value ? s.active : ''}`}
            onClick={() => {
              dispatch(setRate(rate === value ? null : value));
              dispatch(applyFilters(allQuestions));
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};
