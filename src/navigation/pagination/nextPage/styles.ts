import styled, { AnyStyledComponent } from 'styled-components';

import colors from 'styles/colors';

import { WrapperType } from './types';

// import { ReactComponent as IconSVG } from '../media/changePageIcon.svg';
import IconSVG from '../media/changePageIcon.svg';

// const IconSVG = require('../media/changePageIcon.svg') as AnyStyledComponent;

export const Wrapper = styled.div<WrapperType>`
  display: flex;
  align-items: center;
  transition: color 0.5s;
  user-select: none;

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

export const NextPageIcon = styled(IconSVG)`
  height: 25px;
  transform: rotate(180deg);
  margin: 0;
`;
