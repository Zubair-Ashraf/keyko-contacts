import { ButtonProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<ButtonProps> = (
  strings: TemplateStringsArray,
  props: ButtonProps
): string => {
  const classNames: string = ['button']
    .concat(
      ['fullwidth', 'outlined', 'rounded', 'loading'].map(
        (name: string): string | null => (props[name] ? `is-${name}` : null)
      )
    )
    .concat(
      ['color', 'size'].map((name: string): string | null =>
        props[name] ? `is-${props[name]}` : null
      )
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
