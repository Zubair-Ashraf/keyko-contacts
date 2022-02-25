import { FC } from 'react';
import { ListProps } from './props';
import { className } from './methods';
import { ListItem } from './components/ListItem';
import { ListItemAvatar } from './components/ListItemAvatar';
import { ListItemText } from './components/ListItemText';

interface ListSubComponents {
  Item: typeof ListItem;
  ItemAvatar: typeof ListItemAvatar;
  ItemText: typeof ListItemText;
}

export const List: FC<ListProps> & ListSubComponents = (props: ListProps) => {
  const { children }: ListProps = props;

  return <ul className={className`${props}`}>{children}</ul>;
};

List.Item = ListItem;

List.ItemAvatar = ListItemAvatar;

List.ItemText = ListItemText;

export * from './props';

export * from './components/ListItem';
