import React, { FC } from 'react';

import Paragraph from 'typography/paragraph';

import { Wrapper, PageButton, Dots } from './styles';

import { pages } from './utils';

import { PagesProps } from './types';

export const Pages: FC<PagesProps> = ({
  currentPage,
  changePage,
  totalPages,
}) => (
  <Wrapper>
    <>
      {pages(totalPages, currentPage).map(value =>
        typeof value === 'string' ? (
          <Dots>{value}</Dots>
        ) : (
          <PageButton value={value} onClick={() => changePage(value)}>
            {value}
          </PageButton>
        )
      )}
    </>
  </Wrapper>
);

export default Pages;
