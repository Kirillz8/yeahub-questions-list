import { useNavigate } from 'react-router-dom';
import s from './Page404.module.css';

export const Page404 = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <>
      <h1 className={s.title}>404</h1>
      <h2 className={s.subTitle}>page not found</h2>
      <button onClick={handleClick}>Назад</button>
    </>
  );
};
