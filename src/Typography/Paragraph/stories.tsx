import React from 'react';

import { StoryWrapper } from 'styles/helpers';

import Paragraph from './';

export default {
  title: 'Typography|Paragraph',
};

export const Paragraph1 = () => (
  <StoryWrapper>
    <Paragraph type="p1">Paragraph 1</Paragraph>
  </StoryWrapper>
);

export const Paragraph2 = () => (
  <StoryWrapper>
    <Paragraph type="p2">Paragraph 2</Paragraph>
  </StoryWrapper>
);

export const Paragraph3 = () => (
  <StoryWrapper>
    <Paragraph type="p3">Paragraph 3</Paragraph>
  </StoryWrapper>
);

export const Paragraph4 = () => (
  <StoryWrapper>
    <Paragraph type="p4">Paragraph 4</Paragraph>
  </StoryWrapper>
);
