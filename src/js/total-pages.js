import { refs } from './get-refs';

let totalPages;
let perPage = 40;

export function calculatePages(data) {
  totalPages = Math.ceil(data.totalHits / perPage);
  console.log(totalPages);

  if (totalPages > 1) {
    refs.loadMoreBtn.classList.remove('is-hidden');
  }

  return totalPages;
}