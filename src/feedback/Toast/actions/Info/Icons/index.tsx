import React, { FC } from 'react';

import { Wrapper } from './styles';

import { IconType } from '../types';
import { icons } from './utils';

const Icons: FC<IconType> = ({ type }) => {
  const RenderIcon = icons[type];

  return (
    <Wrapper>
      <RenderIcon />
    </Wrapper>
  );
};

export default Icons;
