import { MouseEvent as ReactMouseEvent } from 'react';

export type PagesProps = {
  currentPage: number;
  totalPages: number;
  changePage: (page: number) => void;
};

export type PageButtonProps = {
  value: number;
  onClick: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
