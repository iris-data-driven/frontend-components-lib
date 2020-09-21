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
        toast('Erro!', 'Entre em contato com a equipe técnica', 'error')
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
        toast('Aviso!', 'Entre em contato com a equipe técnica', 'warning')
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
        toast('Sucesso!', 'Entre em contato com a equipe técnica', 'success')
      }
    >
      Click me!
    </button>
  </StoryWrapper>
);
