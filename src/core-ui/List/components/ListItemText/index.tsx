import { FC } from 'react';
import { ListItemTextProps } from './props';
import { className } from './methods';

export const ListItemText: FC<ListItemTextProps> = (
  props: ListItemTextProps
) => {
  const { primary, secondary }: ListItemTextProps = props;

  return (
    <div className={className`${props}`}>
      <span>{primary}</span>
      <span>{secondary}</span>
    </div>
  );
};
