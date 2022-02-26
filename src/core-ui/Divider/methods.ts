import { DividerProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<DividerProps> = (
  strings: TemplateStringsArray,
  props: DividerProps
): string => {
  const classNames: string = ['divider']
    .concat(
      ['color'].map((name: string): string | null =>
        props[name] ? `is-${props[name]}` : null
      )
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
