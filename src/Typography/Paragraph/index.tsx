import React, { FC } from 'react';

import { Wrapper } from './styles';

import { ParagraphProps } from './types';

const Paragraph: FC<ParagraphProps> = ({ type, children }) => (
  <Wrapper data-testid="paragraph" type={type}>
    {children}
  </Wrapper>
);

export default Paragraph;
