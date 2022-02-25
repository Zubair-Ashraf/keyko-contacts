import { GridProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<GridProps> = (
  strings: TemplateStringsArray,
  props: GridProps
): string => {
  const classNames: string = ['']
    .concat(
      ['item', 'container'].map((name: string): string | null =>
        props[name] ? `grid-${name}` : null
      )
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
