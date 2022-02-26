import { FC } from 'react';
import { DrawerProps } from './props';
import { className } from './methods';

export const Drawer: FC<DrawerProps> = (props: DrawerProps) => {
  const { children }: DrawerProps = props;

  return <div className={className`${props}`}>{children}</div>;
};
