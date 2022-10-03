import { refs } from './get-refs';

export function renderGalleryImages(arrayOfImagesForRender) {
  const markup = arrayOfImagesForRender.map(image =>
  `<a href='${image.largeImageURL}' class="photo-card">
    <div>
      <div class="info-image" style="background-image: url('${image.webformatURL}')"></div>
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
  </a>`
  ).join(' ')

  refs.galleryRef.innerHTML = markup;
}