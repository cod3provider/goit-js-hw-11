const axios = require('axios');
axios.defaults.baseURL = 'https://pixabay.com/api/';

export function fetchImages(searchRequest) {
  return axios.get(`?key=30189799-59836afbb9e42d0c8f8f60963&q=${searchRequest}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`)
}

