import styled from 'styled-components';

import Paragraph from 'typography/paragraph';

import { colors } from 'styles';

import { PageButtonProps } from './types';

export const Wrapper = styled.div`
  display: flex;
`;

export const PageButton = styled(Paragraph)<PageButtonProps>`
  display: flex;
  user-select: none;

  & > *:not(:last-child) {
    padding-right: 8px;
  }
`;

export const Dots = styled.div`
  color: ${colors.primary.blue};
`;
