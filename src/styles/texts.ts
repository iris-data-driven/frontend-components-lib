import { css } from 'styled-components';
import colors from './colors';

import 'styles/main.css';

const sizes = {
  heading: {
    h1: '25px',
    h2: '22px',
    h3: '16px',
  },
  paragraph: {
    text1: '16px',
    text2: '16px',
    text3: '14px',
    text4: '14px',
  },
  button: {
    default: '16px',
    small: '13px',
  },
};

const fonts = {
  heading: 'Raleway Bold',
  paragraph: {
    regular: 'Roboto Regular',
    medium: 'Roboto Medium',
  },
  button: 'Raleway Semibold',
};

const headings = {
  h1: css`
    font-family: ${fonts.heading};
    font-style: normal;
    font-size: ${sizes.heading.h1};
    line-height: calc(${sizes.heading.h1} * 1.5);
    color: ${colors.neutral.black};
  `,
  h2: css`
    font-family: ${fonts.heading};
    font-style: normal;
    font-size: ${sizes.heading.h2};
    line-height: calc(${sizes.heading.h2} * 1.5);
    color: ${colors.neutral.black};
  `,
  h3: css`
    font-family: ${fonts.heading};
    font-style: normal;
    font-size: ${sizes.heading.h3};
    line-height: calc(${sizes.heading.h3} * 1.5);
    color: ${colors.neutral.black};
  `,
};

const paragraphs = {
  p1: css`
    font-family: ${fonts.paragraph.regular};
    font-style: normal;
    font-size: ${sizes.paragraph.text1};
    line-height: calc(${sizes.paragraph.text1} * 1.5);
    color: ${colors.neutral.black};
  `,
  p2: css`
    font-family: ${fonts.paragraph.medium};
    font-style: normal;
    font-size: ${sizes.paragraph.text2};
    line-height: calc(${sizes.paragraph.text2} * 1.5);
    color: ${colors.neutral.black};
  `,
  p3: css`
    font-family: ${fonts.paragraph.regular};
    font-style: normal;
    font-size: ${sizes.paragraph.text3};
    line-height: calc(${sizes.paragraph.text3} * 1.5);
    color: ${colors.neutral.black};
  `,
  p4: css`
    font-family: ${fonts.paragraph.medium};
    font-style: normal;
    font-size: ${sizes.paragraph.text4};
    line-height: calc(${sizes.paragraph.text4} * 1.5);
    color: ${colors.neutral.black};
  `,
};

const button = type => {
  const options = {
    default: css`
      font-family: ${fonts.button};
      font-style: normal;
      font-size: ${sizes.button.default};
      line-height: calc(${sizes.button.default} * 1.5);
      color: #fff;
    `,
    small: css`
      font-family: ${fonts.button};
      font-style: normal;
      font-size: ${sizes.button.small};
      line-height: calc(${sizes.button.small} * 1.5);
      color: #fff;
    `,
  };

  return type in options ? options[type] : options['default'];
};

export default {
  headings,
  paragraphs,
  button,
  fonts,
};
