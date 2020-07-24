import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Wrapper = styled.div`
  & > div {
    animation-fill-mode: both;
  }

  @keyframes ball-pulse-sync {
    20% {
      transform: translateY(-10px);
      opacity: 0.7;
    }
    60% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  & > div:nth-child(1) {
    animation: ball-pulse-sync 1.5s -0.14s infinite ease-out;
  }

  & > div:nth-child(2) {
    animation: ball-pulse-sync 1.5s -70ms infinite ease-out;
  }

  & > div:nth-child(3) {
    animation: ball-pulse-sync 1.5s 0s infinite ease-out;
  }
`;

export const Ball = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${colors.neutral.black};
  border-radius: 5px;
  margin: 2px;
  display: inline-block;
`;
