export type PaginationProps = {
  totalPages: number;
  currentPage?: number;
  onChangePage: (page: number) => void;
};
