import React, { FC } from 'react';

import { Wrapper } from "./styles"

import { PaginationProps } from "./types";

const Pagination: FC<PaginationProps> = ({ foo }) => (
    <Wrapper data-testid="pagination">{foo}</Wrapper>
);
export default Pagination;
