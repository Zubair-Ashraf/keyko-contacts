import { ListItemProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<ListItemProps> = (
  strings: TemplateStringsArray,
  props: ListItemProps
): string => {
  const classNames: string = ['list-item']
    .concat(
      ['active'].map((name: string): string | null =>
        props[name] ? `${name}` : null
      )
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
