import React from 'react';

import { StoryWrapper } from 'styles/helpers';

import Placeholder from './';
import { CustomPlaceholder } from './styles';

export default {
  title: 'Feedback|Placeholder',
};

export const Text = () => (
  <StoryWrapper>
    <Placeholder />
  </StoryWrapper>
);

export const Heading = () => (
  <StoryWrapper>
    <Placeholder type="heading" />
  </StoryWrapper>
);

export const Circle = () => (
  <StoryWrapper>
    <Placeholder type="circle" />
  </StoryWrapper>
);

export const Custom = () => (
  <StoryWrapper>
    <CustomPlaceholder type="custom" />
  </StoryWrapper>
);
