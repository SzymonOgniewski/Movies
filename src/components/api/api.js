const APIKEY = 'c1313c580a28eb18aa8970cd12a87819';

export const fetchTrending = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
};
export const fetchSearching = async searchQuery => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
};
export const fetchMovieDetails = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
};
export const fetchMovieCredits = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
};
export const fetchMovieReviews = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIKEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
};
