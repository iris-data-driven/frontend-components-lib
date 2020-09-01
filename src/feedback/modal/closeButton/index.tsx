import React, { FC } from 'react';

import { Wrapper, CloseIcon } from './styles';

import { CloseButtonType } from './types';

const CloseButton: FC<CloseButtonType> = ({ onClick }) => (
  <Wrapper>
    <CloseIcon role="button" onClick={onClick} />
  </Wrapper>
);

export default CloseButton;
