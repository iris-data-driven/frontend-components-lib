import React, { FC } from 'react';

import { Wrapper, CloseIcon } from './styles';

import { CloseButtonType } from './types';

const CloseButton: FC<CloseButtonType> = ({ onClick }) => (
  <Wrapper>
    <CloseIcon onClick={onClick} />
  </Wrapper>
);

export default CloseButton;
