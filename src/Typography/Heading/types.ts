type HeadingTypes = 'h1' | 'h2' | 'h3';

export type StyledHeadingProps = HeadingProps & {
  as: HeadingTypes;
};

export type HeadingProps = {
  type: HeadingTypes;
  className?: string;
};
