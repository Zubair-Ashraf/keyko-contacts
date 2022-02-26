import { ContainerProps } from './props';

export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className: ClassNameFunc<ContainerProps> = (
  strings: TemplateStringsArray,
  props: ContainerProps
): string => {
  const classNames: string = ['container']

    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
