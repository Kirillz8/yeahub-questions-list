import s from './QuestionsSkeletonList.module.css';

export const QuestionsSkeletonList = () => {
  return (
    <ul className={s.list}>
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className={s.card} />
      ))}
    </ul>
  );
};
