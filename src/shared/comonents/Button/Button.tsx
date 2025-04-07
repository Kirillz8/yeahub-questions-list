import type { ButtonHTMLAttributes, ReactNode } from 'react';
import s from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={`${s.button} ${className || ''}`} {...rest}>
      {children}
    </button>
  );
};
