import { FC } from 'react';
import { className } from './methods';
import { ButtonProps } from './props';

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { disabled, onClick, children }: ButtonProps = props;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className`${props}`}
    >
      {children}
    </button>
  );
};

export * from './props';
