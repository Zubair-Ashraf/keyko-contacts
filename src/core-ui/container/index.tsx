import { FC } from 'react';
import { ContainerProps } from './props';
import { className } from './methods';

export const Container: FC<ContainerProps> = (props: ContainerProps) => {
  const { children }: ContainerProps = props;

  return <div className={className`${props}`}>{children}</div>;
};
