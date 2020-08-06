import styled from 'styled-components';

import colors from 'styles/colors';

import { WrapperButtonType } from './types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const WrapperButton = styled.div<WrapperButtonType>`
  display: flex;
  align-items: center;
  transition: color 0.5s;
  user-select: none;
  outline: none;
  margin: 10px;

  p,
  svg {
    cursor: ${props => (props.isClickable ? 'pointer' : 'not-allowed')};
    color: ${props =>
      props.isClickable ? colors.primary.blue : colors.neutral.greyDark};
    fill: ${props =>
      props.isClickable ? colors.primary.blue : colors.neutral.greyDark};
    user-select: none;
    margin: 0;
  }
`;
