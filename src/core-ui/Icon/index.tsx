import { FC } from 'react';
import { className } from './methods';
import { IconProps } from './props';

export const Icon: FC<IconProps> = (props: IconProps) => {
  return <i onClick={props.onClick} className={className`${props}`} />;
};

export * from './props';
