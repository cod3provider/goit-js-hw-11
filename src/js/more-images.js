import { refs } from './get-refs';

export function renderMoreImages(moreImages) {
  const markup = moreImages.map(image =>
    `<a href='${image.largeImageURL}' class="photo-card">
      <div>
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes ${image.likes}</b>
          </p>
          <p class="info-item">
            <b>Views ${image.views}</b>
          </p>
          <p class="info-item">
            <b>Comments ${image.comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads ${image.downloads}</b>
          </p>
        </div>
      </div>
    </a>`).join(' ');

  refs.galleryRef.insertAdjacentHTML('beforeend', markup);
}