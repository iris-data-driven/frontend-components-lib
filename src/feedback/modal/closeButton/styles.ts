import styled from 'styled-components';

import Close from 'icons/Close';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 16px;
`;

export const CloseIcon = styled(Close).attrs(() => ({
  role: 'button',
  'aria-label': 'close modal',
}))`
  :hover {
    cursor: pointer;
  }
  width: 19px;
  height: 19px;
`;
