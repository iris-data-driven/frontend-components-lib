import React, { FC } from 'react';

import Paragraph from 'typography/Paragraph';

import { Wrapper, PageButton, Dots } from './styles';

import { pages } from './utils';

import { PagesProps } from './types';

export const Pages: FC<PagesProps> = ({
  currentPage,
  totalPages,
  changePage,
}) => (
  <Wrapper>
    {pages(totalPages, currentPage).map((value, index) =>
      typeof value === 'string' ? (
        <Dots key={`${value}${index}`} type="p2">
          {value}
        </Dots>
      ) : (
        <PageButton
          key={value}
          value={value}
          active={currentPage === value}
          onClick={() => changePage(value)}
        >
          <Paragraph type="p2">{value}</Paragraph>
        </PageButton>
      )
    )}
  </Wrapper>
);

export default Pages;
