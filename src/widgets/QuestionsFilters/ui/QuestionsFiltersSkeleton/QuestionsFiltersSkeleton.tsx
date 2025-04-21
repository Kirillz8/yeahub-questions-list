import s from './QuestionsFiltersSkeleton.module.css';

export const QuestionsFiltersSkeleton = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.input} />
      <div className={s.tags}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={s.tag} />
        ))}
      </div>
    </div>
  );
};
