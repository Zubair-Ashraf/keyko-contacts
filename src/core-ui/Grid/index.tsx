import { FC } from 'react';
import { GridProps } from './props';
import { className } from './methods';

export const Grid: FC<GridProps> = (props: GridProps) => {
  const { children }: GridProps = props;

  return <div className={className`${props}`}>{children}</div>;
};

export * from './props';
