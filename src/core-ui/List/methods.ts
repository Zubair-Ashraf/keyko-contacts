import { ListProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<ListProps> = (
  strings: TemplateStringsArray,
  props: ListProps
): string => {
  const classNames: string = ['list']
    .concat(
      ['hoverable'].map((name: string): string | null =>
        props[name] ? `is-${name}` : null
      )
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
