import { Authorization } from '../Authorization/Authorization.tsx';
import { HeaderLogo } from './HeaderLogo/HeaderLogo.tsx';
import { Navigation } from './Navigation/Navigation.tsx';
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
