import { Path } from 'app/routes/rootRouter.tsx';
import { Link } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <Link className={s.link} to={Path.PublicQuestionsPage}>
        База вопросов
      </Link>
      <a className={s.link} href={'#'}>
        Тренажер
      </a>
    </nav>
  );
};
