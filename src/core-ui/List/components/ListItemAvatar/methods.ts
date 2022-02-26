import { ListItemAvatarProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<ListItemAvatarProps> = (
  strings: TemplateStringsArray,
  props: ListItemAvatarProps
): string => {
  const classNames: string = ['list-item-avatar']
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
