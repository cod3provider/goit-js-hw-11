import { refs } from './get-refs';
import { fetchImages } from './fetch-images';
import { renderGalleryImages } from './render-gallery';
import { calculatePages } from './total-pages';
import { paginationPages } from './options-pagination';
import { Notify } from 'notiflix';
import { createLightBox } from './lightbox';

import "simplelightbox/dist/simple-lightbox.min.css";

refs.formRef.addEventListener('submit', searchImage);
refs.loadMoreBtn.addEventListener('click', paginationPages);

async function searchImage(evt) {
  evt.preventDefault();

  refs.loadMoreBtn.classList.add('is-hidden');

  const imagesQuery = evt.target.elements.searchQuery.value.trim();
  if (!imagesQuery) {
    Notify.failure('Please enter what I need to find');
    return;
  }

  try {
    const imagesArr = await fetchImages(imagesQuery)
      .then(response => response.data);

    if (imagesArr.total === 0) {
      Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return;
    }
    renderGalleryImages(imagesArr.hits);
    createLightBox();


    Notify.success(`Found ${imagesArr.total} images`);
    calculatePages(imagesArr);

    // if (imagesArr.totalHits >=)
    console.log(imagesArr);
  } catch(error) {
    console.dir(error);
  }
}