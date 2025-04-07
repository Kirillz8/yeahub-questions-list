import { Link } from 'react-router-dom';
import logo from '../../../shared/assets/YeahubLogo.svg';
import s from './HeaderLogo.module.css';

export const HeaderLogo = () => {
  return (
    <Link className={s.logo} to={'/'}>
      <img src={logo} alt="YeaHub logo" />
    </Link>
  );
};
