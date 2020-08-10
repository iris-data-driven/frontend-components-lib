type placeholderTypes = 'heading' | 'text' | 'circle' | 'custom';

export type PlaceholderStyleProps = {
  type?: placeholderTypes;
};

export type PlaceholderProps = PlaceholderStyleProps & {
  className?: string;
};
