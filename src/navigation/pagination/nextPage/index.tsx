import React, { FC } from 'react';

import Paragraph from 'typography/paragraph';

import { Wrapper, NextPageIcon } from './styles';

import { NextPageProps } from './types';

const NextPage: FC<NextPageProps> = ({
  currentPage,
  changePage,
  totalPages,
}) => {
  const nextPage = currentPage + 1;
  const isClickable = nextPage <= totalPages;

  return (
    <Wrapper
      onClick={() => isClickable && changePage(nextPage)}
      isClickable={isClickable}
      role="next-page-button"
    >
      <Paragraph type="p4">Próxima</Paragraph>
      <NextPageIcon />
    </Wrapper>
  );
};

export default NextPage;
