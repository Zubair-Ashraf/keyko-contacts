export type ClassNameFunc<TProps> = (
  strings: TemplateStringsArray,
  props: TProps
) => string;

export const className = (): string => {
  const classNames: string = ['table']
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
