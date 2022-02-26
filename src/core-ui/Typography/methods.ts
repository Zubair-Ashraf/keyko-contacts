import { TypographyProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<TypographyProps> = (
  strings: TemplateStringsArray,
  props: TypographyProps
): string => {
  const classNames: string = ['typo']
    .concat(
      ['size'].map((name: string): string | null =>
        props[name] ? `is-${props[name]}` : null
      )
    )
    .concat(
      ['color'].map((name: string): string | null =>
        props[name] ? `has-text-${props[name]}` : null
      )
    )
    .concat(
      ['spaced'].map((name: string): string | null =>
        props[name] ? `is-${name}` : null
      )
    )
    .concat(
      ['textAlign'].map((name: string): string | null =>
        props[name] ? `has-text-${props[name]}` : null
      )
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
