import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ children, className, onClick, ...rest }: ButtonProps) => {
  return (
    <button className={`${className || ''}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
