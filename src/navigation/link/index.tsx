import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Paragraph from 'Typography/Paragraph';

import { LinkProps } from './types';

import { getParagraphType } from './utils';

const Link: FC<LinkProps> = ({ children, to, type }) => (
  <Link to={to}>
    <Paragraph type={getParagraphType(type)}>{children}</Paragraph>
  </Link>
);

export default Link;
