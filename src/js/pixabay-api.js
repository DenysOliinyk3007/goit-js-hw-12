
import axios from 'axios'
const API_KEY = '53125865-ed9f58673896f3ad0b9dfa3df';

export async function getImages(query, page, limit) {
  let searchParams = new URLSearchParams({
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: limit,
      page: page
    });
  const response = await axios({
      method: 'get',
      url: `https://pixabay.com/api/?${searchParams}`
    });
  return {array: response.data.hits,
  totalHits: response.data.totalHits}
  }