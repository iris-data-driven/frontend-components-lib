import React, { useState } from 'react';

import { StoryWrapper } from 'styles/helpers';

import PaginationComponent from './';

export default {
  title: 'Navigation|Pagination',
};
export const Pagination = () => {
  const [currentPage, setcurrentPage] = useState(1);

  const onChangePage = page => {
    setcurrentPage(page);
  };

  return (
    <StoryWrapper>
      <PaginationComponent
        currentPage={currentPage}
        onChangePage={onChangePage}
        totalPages={20}
      />
    </StoryWrapper>
  );
};
