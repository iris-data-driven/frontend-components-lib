import React from 'react';

import { StoryWrapper } from 'styles/helpers';

import PaginationComponent from './';

export default {
  title: 'Pagination|Pagination',
};
export const Pagination = () => (
  <StoryWrapper>
    <PaginationComponent totalPages={20} onChangePage={() => {}} />
  </StoryWrapper>
);
