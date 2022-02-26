import { FC } from 'react';
import { className } from './methods';
import { TypographyProps } from './props';

export const Typography: FC<TypographyProps> = (props: TypographyProps) => {
  const { size, children, ...restProps }: TypographyProps = props;

  switch (size) {
    case '1':
      return (
        <h1 className={className`${props}`} {...restProps}>
          {children}
        </h1>
      );

    case '2':
      return (
        <h2 className={className`${props}`} {...restProps}>
          {children}
        </h2>
      );

    case '3':
      return (
        <h3 className={className`${props}`} {...restProps}>
          {children}
        </h3>
      );

    case '4':
      return (
        <h4 className={className`${props}`} {...restProps}>
          {children}
        </h4>
      );

    case '5':
      return (
        <h5 className={className`${props}`} {...restProps}>
          {children}
        </h5>
      );

    case '6':
      return (
        <h6 className={className`${props}`} {...restProps}>
          {children}
        </h6>
      );

    default:
      throw new Error(`subtitle of size ${size} is not supported`);
  }
};

export * from './props';
