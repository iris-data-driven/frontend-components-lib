import styled from 'styled-components';

import texts from 'styles/texts';

import { StyledHeadingProps } from './types';

export const Wrapper = styled.h1<StyledHeadingProps>`
  ${props => texts.headings[props.type]}
`;
