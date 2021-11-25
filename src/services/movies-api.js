const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '9acbfb2c2d25c0e79e1c43f46316bf58';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/get-trending/week?api_key=${KEY}`,
  );
}

export function fetchMovieById(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
}

export function fetchCastById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`,
  );
}

export function fetchReviewsById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`,
  );
}

export function fetchMoviesByQuery(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`,
  );
}
