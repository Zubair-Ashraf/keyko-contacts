import { ReactNode } from 'react';

export interface ChipProps {
  rounded?: boolean;

  color?:
    | 'dark'
    | 'light'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

  size?: 'small' | 'medium' | 'large';

  disabled?: boolean;

  children?: ReactNode;

  onClick?: (e: any) => any;
}
