import { ListItemTextProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<ListItemTextProps> = (
  strings: TemplateStringsArray,
  props: ListItemTextProps
): string => {
  const classNames: string = ['list-item-text']
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
