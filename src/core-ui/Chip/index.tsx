import { FC } from 'react';
import { className } from './methods';
import { ChipProps } from './props';

export const Chip: FC<ChipProps> = (props: ChipProps) => {
  const { disabled, onClick, children }: ChipProps = props;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className`${props}`}
    >
      {children}
    </button>
  );
};

export * from './props';
