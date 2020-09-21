import React, { FC } from 'react';

import { Wrapper } from './styles';

import { HeadingProps } from './types';

const Heading: FC<HeadingProps> = ({ type, children, className }) => (
  <Wrapper type={type} as={type} className={className}>
    {children}
  </Wrapper>
);

export default Heading;
