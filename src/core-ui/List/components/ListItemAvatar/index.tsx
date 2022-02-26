import { FC } from 'react';
import { ListItemAvatarProps } from './props';
import { className } from './methods';

export const ListItemAvatar: FC<ListItemAvatarProps> = (
  props: ListItemAvatarProps
) => {
  const { url }: ListItemAvatarProps = props;

  return <img alt='' src={url} className={className`${props}`} />;
};
