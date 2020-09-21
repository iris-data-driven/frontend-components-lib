import React, { FC } from 'react';

import Icons from './Icons';

import { TextContainer, Title, Description } from './styles';

import { InfoProps } from './types';

const Info: FC<InfoProps> = ({ title, description, type }) => (
  <>
    <Icons type={type} />
    <TextContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </TextContainer>
  </>
);

export default Info;
