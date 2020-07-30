type ParagraphTypes = 'p1' | 'p2' | 'p3' | 'p4';

export type ParagraphProps = {
  type?: ParagraphTypes;
  className?: string;
  onClick?: () => void;
};
