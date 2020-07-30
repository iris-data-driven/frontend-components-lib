import styled from 'styled-components';

import colors from 'styles/colors';

import { WrapperType } from './types';

export const Wrapper = styled.div<WrapperType>`
  display: flex;
  align-items: center;
  transition: color 0.5s;
  user-select: none;

  p,
  img,
  svg,
  path {
    cursor: ${props => (props.isClickable ? 'pointer' : 'not-allowed')};
    color: ${props =>
      props.isClickable ? colors.primary.blue : colors.neutral.greyDark};
    margin: 0;
    .st0 {
      fill: ${props =>
        props.isClickable ? colors.primary.blue : colors.neutral.greyDark};
    }
    fill: ${colors.neutral.greyDark};
  }
`;

export const NextPageIcon = styled.img`
  height: 32px;
  transform: rotate(180deg);
  fill: ${colors.neutral.greyDark};
`;
