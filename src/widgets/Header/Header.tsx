import { Authorization } from 'widgets/Authorization/Authorization.tsx';
import { HeaderLogo } from 'widgets/Header/HeaderLogo/HeaderLogo.tsx';
import { Navigation } from 'widgets/Header/Navigation/Navigation.tsx';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.headerWrapper}>
      <div className={s.header}>
        <div className={s.headerLeft}>
          <HeaderLogo />
          <Navigation />
        </div>
        <Authorization />
      </div>
    </header>
  );
};
