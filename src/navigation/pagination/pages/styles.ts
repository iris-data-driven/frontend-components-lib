import styled from 'styled-components';

import Paragraph from 'typography/paragraph';

import { colors } from 'styles';

import { PageButtonProps } from './types';

export const Wrapper = styled.div`
  display: flex;
  /* background-color: #f9f9f9; */
`;

export const PageButton = styled(Paragraph)<PageButtonProps>`
  display: flex;
  user-select: none;
  border: 0px solid ${colors.primary.blue};
  border-width: ${props => props.active && '1px'};
  min-width: 32px;
  height: 32px;
  background-color: white;
  padding: 10px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  user-select: none;
  border-radius: 7px;
  cursor: pointer;
  margin: 0;

  & > *:not(:last-child) {
    padding-right: 8px;
    color: ${colors.primary.blue};
  }
`;

export const Dots = styled(Paragraph)`
  display: flex;
  user-select: none;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: ${colors.primary.blue};
  margin: 0;
`;
