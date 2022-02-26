import { ReactNode } from 'react';

export interface ButtonProps {
  fullwidth?: boolean;

  outlined?: boolean;

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

  type?: 'submit' | 'button';

  children?: ReactNode;

  onClick?: (e: any) => any;
}
