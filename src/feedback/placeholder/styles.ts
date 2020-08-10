import styled, { css } from 'styled-components';

import texts from 'styles/texts';

import { PlaceholderStyleProps } from './types';

const textSytle = css`
  width: 250px;
  height: ${texts.sizes.paragraph.text1};
`;

const headingSytle = css`
  width: 170px;
  height: ${texts.sizes.heading.h1};
`;

const circleStyle = css`
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;

const placeholderStyles = {
  text: textSytle,
  heading: headingSytle,
  circle: circleStyle,
};

export const Wrapper = styled.div<PlaceholderStyleProps>`
  display: block;
  background-color: #b2b2b2;
  border-radius: 20px;

  ${props => placeholderStyles[props.type]}

  animation: react-placeholder-pulse 1.5s infinite;

  @keyframes react-placeholder-pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

export const CustomPlaceholder = styled(Wrapper)`
  width: 100%;
  height: 100px;
`;
