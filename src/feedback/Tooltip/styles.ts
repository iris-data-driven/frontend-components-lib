import styled from 'styled-components';
import ReactTooltipOriginal from 'react-tooltip';

import Paragraph from 'typography/Paragraph';

import { colors, texts } from 'styles';

export const Span = styled(Paragraph).attrs(() => ({
  as: 'span',
}))`
  ${props => texts.paragraphs[props.type]}
`;

export const ReactTooltip = styled(ReactTooltipOriginal).attrs(props => ({
  place: props['data-type'] === 'small' ? 'top' : 'right',
  effect: 'solid',
  id: props.id,
  border: true,
  textColor: colors.neutral.black,
  backgroundColor: '#f3f4fb',
  borderColor: 'transparent',
  arrowColor: '#f3f4fb',
}))`
  && {
    min-width: ${props => (props['data-type'] === 'small' ? '44px' : '125px')};
    padding: ${props => (props['data-type'] === 'small' ? '0 10px' : '10px')};
    box-sizing: border-box;
    border-radius: 5px;
  }
`;
