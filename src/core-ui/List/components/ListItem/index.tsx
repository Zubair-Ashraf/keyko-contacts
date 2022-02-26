import { FC } from 'react';
import { ListItemProps } from './props';
import { className } from './methods';

export const ListItem: FC<ListItemProps> = (props: ListItemProps) => {
  const { children }: ListItemProps = props;

  return <li className={className`${props}`}>{children}</li>;
};
