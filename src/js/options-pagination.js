import { refs } from './get-refs';
import { renderMoreImages } from './more-images';
import { calculatePages } from './total-pages';
import {resetLightBox} from './lightbox';
import { Notify } from 'notiflix';

const axios = require('axios');

let page = 1;

export async function paginationPages() {
  const imageSearchRequest = refs.formRef.elements.searchQuery.value;

  page += 1;

  const data = await axios
    .get(`?key=30189799-59836afbb9e42d0c8f8f60963&q=${imageSearchRequest}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`)
    .then(response => response.data);

  renderMoreImages(data.hits);

  let totalPages = calculatePages(data);

  resetLightBox();

  if (page === totalPages) {
    refs.loadMoreBtn.classList.add('is-hidden');
    Notify.warning('All images loaded!');
  }
}