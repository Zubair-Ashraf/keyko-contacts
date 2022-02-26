import { FC } from 'react';
import { className } from './methods';
import { TextFieldProps } from './props';

export const TextField: FC<TextFieldProps> = (props: TextFieldProps) => {
  const { size, color, rounded, ...restProps }: TextFieldProps = props;

  props = { size, color, rounded };

  return <input className={className`${props}`} {...restProps} />;
};

export * from './props';
