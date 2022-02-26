import { BoxProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<BoxProps> = (
  strings: TemplateStringsArray,
  props: BoxProps
): string => {
  const classNames: string = ['box']
    .concat(
      ['component'].map((name: string): string | null =>
        props[name] ? `is-${props[name]}` : null
      )
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
