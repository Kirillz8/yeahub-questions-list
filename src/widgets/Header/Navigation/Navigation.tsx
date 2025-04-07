import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <a className={s.link} href={'#'}>
        База вопросов
      </a>
      <a className={s.link} href={'#'}>
        Тренажер
      </a>
    </nav>
  );
};
