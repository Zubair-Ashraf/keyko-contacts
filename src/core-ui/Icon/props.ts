export interface IconProps {
  name: string;

  color?:
    | 'black'
    | 'white'
    | 'dark'
    | 'light'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

  position?: 'right' | 'left';

  size?: 'small' | 'medium' | 'large';

  'data-tooltip'?: string;

  onClick?: (e: any) => any;
}
