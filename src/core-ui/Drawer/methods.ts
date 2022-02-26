import { DrawerProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<DrawerProps> = (
  strings: TemplateStringsArray,
  props: DrawerProps
): string => {
  const classNames: string = ['drawer']
    .concat(
      ['open'].map((name: string): string | null =>
        props[name] ? `is-${name}` : null
      )
    )
    .concat(
      ['color'].map((name: string): string | null =>
        props[name] ? `is-${props[name]}` : null
      )
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
