import styled from 'styled-components';

import Heading from 'typography/Heading';
import Paragraph from 'typography/Paragraph';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Heading).attrs(() => ({
  type: 'h3',
}))`
  margin: 0;
`;

export const Description = styled(Paragraph).attrs(() => ({
  type: 'p3',
}))`
  margin: 0;
`;
