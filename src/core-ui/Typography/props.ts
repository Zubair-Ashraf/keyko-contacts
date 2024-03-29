import { ReactNode } from 'react';

export interface TypographyProps {
  size: '1' | '2' | '3' | '4' | '5' | '6';

  color?:
    | 'black'
    | 'white'
    | 'light'
    | 'dark'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

  textAlign: 'left' | 'center' | 'right';

  spaced?: boolean;

  children?: ReactNode;
}
