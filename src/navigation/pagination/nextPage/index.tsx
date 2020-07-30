import React, { FC } from 'react';

import Paragraph from 'typography/paragraph';

import { Wrapper, NextPageIcon } from './styles';

import { NextPageProps } from './types';

const NextPage: FC<NextPageProps> = ({
  currentPage,
  changePage,
  totalPages,
}) => {
  const NextIcon = require('./back.svg');

  const nextPage = currentPage + 1;
  const isClickable = nextPage <= totalPages;

  return (
    <Wrapper
      onClick={() => isClickable && changePage(nextPage)}
      isClickable={isClickable}
      role="next-page-button"
    >
      <Paragraph type="p2">Próxima</Paragraph>
      <NextPageIcon src={NextIcon} alt="Next Page" />
    </Wrapper>
  );
};

export default NextPage;
