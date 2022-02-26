export interface TagInputProps {
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger';

  size?: 'small' | 'medium' | 'large';

  type?: 'text' | 'password' | 'email' | 'tel' | 'number';

  name?: string;

  placeholder?: string;

  defaultValues?: Array<string>;

  value?: string;

  pattern?: string;

  disabled?: boolean;

  rounded?: boolean;

  handleChange?: (e: any) => void;
}
