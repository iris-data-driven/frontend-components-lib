import React, { FC } from 'react';

import { Wrapper } from './styles';

import { HeadingProps } from './types';

const Heading: FC<HeadingProps> = ({ type, children }) => (
  <Wrapper data-testid="heading" type={type} as={type}>
    {children}
  </Wrapper>
);

export default Heading;
