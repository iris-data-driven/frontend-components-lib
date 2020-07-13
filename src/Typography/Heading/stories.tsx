import React from 'react';

import { StoryWrapper } from 'styles/helpers';

import Heading from './';

export default {
  title: 'Typography|Heading',
};

export const Heading1 = () => (
  <StoryWrapper>
    <Heading type="h1">Heading 1</Heading>
  </StoryWrapper>
);
export const Heading2 = () => (
  <StoryWrapper>
    <Heading type="h2">Heading 2</Heading>
  </StoryWrapper>
);
export const Heading3 = () => (
  <StoryWrapper>
    <Heading type="h3">Heading 3</Heading>
  </StoryWrapper>
);
