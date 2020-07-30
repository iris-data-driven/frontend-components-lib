import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Paragraph from 'typography/paragraph';

import { LinkProps } from './types';

import { getParagraphType } from './utils';

const Link: FC<LinkProps> = ({ children, to, type }) => (
  <RouterLink to={to} role="link">
    <Paragraph type={getParagraphType(type)}>{children}</Paragraph>
  </RouterLink>
);

export default Link;
