export type IconType = {
  type: 'success' | 'error' | 'warning';
};

export type InfoProps = IconType & {
  title: string;
  description: string;
};
