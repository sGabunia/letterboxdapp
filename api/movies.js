import axios from 'axios';

const apiKey = 'c9ef2728095f70fe3dea055a56d5cc83';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  );
  return response.data;
};

const getMovieDetails = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}?api_key=${apiKey}&language=en-US`,
  );
  return response.data;
};

const getMovieCast = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}/credits?api_key=${apiKey}&language=en-US`,
  );
  return response.data;
};

const getMovieReviews = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}/reviews?api_key=${apiKey}&language=en-US`,
  );
  return response.data;
};

const getTopRated = async category => {
  const response = await axios.get(
    `${BASE_URL}${category}/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  );
  return response.data;
};

const getMovies = {
  getPopularMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
  getTopRated,
};

export default getMovies;
