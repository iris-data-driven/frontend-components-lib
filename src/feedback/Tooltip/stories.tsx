import React from 'react';

import Paragraph from 'typography/Paragraph';
import Warning from 'icons/Warning';

import { StoryWrapper } from 'styles/helpers';

import Tooltip from './';

export default {
  title: 'Feedback|Tooltip',
};

export const Small = () => (
  <StoryWrapper>
    <Paragraph type="p3" data-tip data-for="storie-tooltip">
      tooltip
    </Paragraph>
    <Tooltip id="storie-tooltip" text="123" type="small" />
  </StoryWrapper>
);

export const Big = () => (
  <StoryWrapper>
    <Warning data-tip data-for="storie-tooltip" />
    <Tooltip
      id="storie-tooltip"
      text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos"
    />
  </StoryWrapper>
);
