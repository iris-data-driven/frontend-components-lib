import React, { FC } from 'react';

import { Wrapper } from './styles';

import { ParagraphProps } from './types';

const Paragraph: FC<ParagraphProps> = ({
  type,
  children,
  className,
  onClick,
}) => (
  <Wrapper role="paragraph" type={type} className={className} onClick={onClick}>
    {children}
  </Wrapper>
);

Paragraph.defaultProps = {
  type: 'p1',
};

export default Paragraph;
