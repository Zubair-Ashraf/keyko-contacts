import { TagInputProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<TagInputProps> = (
  strings: TemplateStringsArray,
  props: TagInputProps
): string => {
  const classNames: string = ['input']
    .concat(
      ['rounded'].map((name: string): string | null =>
        props[name] ? `is-${name}` : null
      )
    )
    .concat(
      ['color', 'size'].map((name: string): string | null =>
        props[name] ? `is-${props[name]}` : null
      )
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
