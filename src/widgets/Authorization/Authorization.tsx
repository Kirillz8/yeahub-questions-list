import { Button } from '../../shared/comonents/Button/Button.tsx';
import s from '../../shared/comonents/Button/Button.module.css';

export const Authorization = () => {
  return (
    <div className={s.btnAuth}>
      <Button className={s.loginButton}>Вход</Button>
      <Button className={s.registerButton}>Регистрация</Button>
    </div>
  );
};
