import styled from 'styled-components';

import colors from 'styles/colors';

import { WrapperType } from './types';

export const Wrapper = styled.div<WrapperType>`
  p {
    cursor: ${props => (props.isClickable ? 'pointer' : 'not-allowed')};
    color: ${props =>
      props.isClickable ? colors.primary.blue : colors.neutral.greyDark};
    transition: color 0.5s;
    user-select: none;
  }
`;
