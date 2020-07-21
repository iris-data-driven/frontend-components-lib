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
    button: '16px',
  },
};

const headings = {
  h1: css`
    font-family: 'Raleway Bold';
    font-style: normal;
    font-size: ${sizes.heading.h1};
    line-height: calc(${sizes.heading.h1} * 1.5);
    color: ${colors.neutrals.black};
  `,
  h2: css`
    font-family: 'Raleway Bold';
    font-style: normal;
    font-size: ${sizes.heading.h2};
    line-height: calc(${sizes.heading.h2} * 1.5);
    color: ${colors.neutrals.black};
  `,
  h3: css`
    font-family: 'Raleway Bold';
    font-style: normal;
    font-size: ${sizes.heading.h3};
    line-height: calc(${sizes.heading.h3} * 1.5);
    color: ${colors.neutrals.black};
  `,
};

const paragraphs = {
  p1: css`
    font-family: 'Roboto Regular';
    font-style: normal;
    font-size: ${sizes.paragraph.text1};
    line-height: calc(${sizes.paragraph.text1} * 1.5);
    color: ${colors.neutrals.black};
  `,
  p2: css`
    font-family: 'Roboto Medium';
    font-style: normal;
    font-size: ${sizes.paragraph.text2};
    line-height: calc(${sizes.paragraph.text2} * 1.5);
    color: ${colors.neutrals.black};
  `,
  p3: css`
    font-family: 'Roboto Regular';
    font-style: normal;
    font-size: ${sizes.paragraph.text3};
    line-height: calc(${sizes.paragraph.text3} * 1.5);
    color: ${colors.neutrals.black};
  `,
  p4: css`
    font-family: 'Roboto Medium';
    font-style: normal;
    font-size: ${sizes.paragraph.text4};
    line-height: calc(${sizes.paragraph.text4} * 1.5);
    color: ${colors.neutrals.black};
  `,
};

const button = css`
  font-family: 'Raleway Semibold';
  font-style: normal;
  font-size: ${sizes.paragraph.button};
  line-height: calc(${sizes.paragraph.button} * 1.5);
  color: ${colors.neutrals.black};
`;

export default {
  headings,
  paragraphs,
  button,
  sizes,
};
