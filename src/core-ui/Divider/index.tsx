import { FC } from 'react';
import { DividerProps } from './props';
import { className } from './methods';

export const Divider: FC<DividerProps> = (props: DividerProps) => (
  <hr className={className`${props}`} />
);
