export const getParagraphType = (type: string) => {
  const options = {
    default: 'p2',
    small: 'p3',
  };

  return type in options ? options[type] : options['default'];
};
