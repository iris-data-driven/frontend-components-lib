import React from 'react';

import { Container, toast } from './';

import { StoryWrapper } from 'styles/helpers';

export default {
  title: 'Feedback|Toast',
};

export const Error = () => (
  <StoryWrapper>
    <Container />
    <button
      onClick={() =>
        toast.error('Erro!', 'Entre em contato com a equipe técnica')
      }
    >
      Click me!
    </button>
  </StoryWrapper>
);

export const Warning = () => (
  <StoryWrapper>
    <Container />
    <button
      onClick={() =>
        toast.warning('Aviso!', 'Entre em contato com a equipe técnica')
      }
    >
      Click me!
    </button>
  </StoryWrapper>
);

export const Success = () => (
  <StoryWrapper>
    <Container />
    <button
      onClick={() =>
        toast.warning('Sucesso!', 'Entre em contato com a equipe técnica')
      }
    >
      Click me!
    </button>
  </StoryWrapper>
);
