import { ReactNode } from 'react';

export interface DrawerProps {
  children: ReactNode;
  open?: boolean;
  color?: 'dark' | 'light';
}
