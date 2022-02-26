import { IconProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<IconProps> = (
  strings: TemplateStringsArray,
  props: IconProps
): string => {
  const classNames: string = ['icon']
    .concat(
      ['name'].map((name: string): string | null =>
        props[name] ? `fa fa-${props[name]}` : null
      )
    )
    .concat(
      ['color'].map((name: string): string | null =>
        props[name] ? `has-text-${props[name]}` : null
      )
    )
    .concat(
      ['position', 'size'].map((name: string): string | null =>
        props[name] ? `is-${props[name]}` : null
      )
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
