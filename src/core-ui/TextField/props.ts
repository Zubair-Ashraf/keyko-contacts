import { ChangeEvent } from 'react';

export interface TextFieldProps {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';

  size?: 'small' | 'medium' | 'large';

  type?: 'text' | 'password' | 'email' | 'tel' | 'number';

  name?: string;

  placeholder?: string;

  defaultValue?: string;

  value?: string;

  pattern?: string;

  disabled?: boolean;

  rounded?: boolean;

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
