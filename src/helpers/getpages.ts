export function getPages(
  totalPages: number,
  pageSize: number,
  currentPage: number
) {
  const paginationLimit = 10;
  const finalPages = Math.ceil(totalPages / pageSize);
  const pages: (number | string)[] = [];

  const currentSegment = Math.floor((currentPage - 1) / paginationLimit);
  const startPage = currentSegment * paginationLimit + 1;
  let endPage = startPage + paginationLimit - 1;
  if (endPage > finalPages) endPage = finalPages;

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < finalPages) {
    pages.push("...");
    pages.push(finalPages);
  }

  return pages;
}
