import React, { FC } from 'react';

import { Wrapper } from './styles';

import { ParagraphProps } from './types';

const Paragraph: FC<ParagraphProps> = ({ type, children, className }) => (
  <Wrapper role="paragraph" type={type} className={className}>
    {children}
  </Wrapper>
);

Paragraph.defaultProps = {
  type: 'p1',
};

export default Paragraph;
