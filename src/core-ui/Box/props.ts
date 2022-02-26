import { ReactNode } from 'react';

export interface BoxProps {
  component?: 'nav' | 'main';
  children?: ReactNode;
}
