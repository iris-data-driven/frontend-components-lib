export const pages = (
  totalPage: number,
  currentPage: number
): (number | string)[] => {
  if (totalPage <= 6) {
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
    return pages;
  } else if (currentPage < 6) {
    return [1, 2, 3, 4, 5, '...', totalPage];
  } else if (currentPage < totalPage - 4) {
    return [
      1,
      '...',
      currentPage - 2,
      currentPage - 1,
      currentPage,
      '...',
      totalPage,
    ];
  } else {
    return [
      1,
      '...',
      totalPage - 4,
      totalPage - 3,
      totalPage - 2,
      totalPage - 1,
      totalPage,
    ];
  }
};
