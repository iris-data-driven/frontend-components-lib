import React from 'react';

import { Wrapper, Ball } from './styles';

const Dots = () => (
  <Wrapper role="dots-loader">
    <Ball />
    <Ball />
    <Ball />
  </Wrapper>
);

export default Dots;
