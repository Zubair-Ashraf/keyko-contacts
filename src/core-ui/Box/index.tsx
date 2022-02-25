import { FC } from 'react';
import { BoxProps } from './props';
import { className } from './methods';

export const Box: FC<BoxProps> = (props: BoxProps) => {
  const { children }: BoxProps = props;

  return <div className={className`${props}`}>{children}</div>;
};
