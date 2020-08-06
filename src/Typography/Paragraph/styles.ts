import styled from 'styled-components';

import texts from 'styles/texts';

import { ParagraphProps } from './types';

export const Wrapper = styled.p<ParagraphProps>`
  ${props => texts.paragraphs[props.type]}
`;
