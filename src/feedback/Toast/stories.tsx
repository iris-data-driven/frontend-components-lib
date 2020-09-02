import React from 'react';

import { Container, toast } from './';

import { StoryWrapper } from 'styles/helpers';

export default {
  title: 'Feedback|Toast',
};

export const Link = () => (
  <StoryWrapper>
    <Container />
    <button
      onClick={() => toast.error('Erro! Entre em contato com a equipe técnica')}
    >
      Click me!
    </button>
  </StoryWrapper>
);
