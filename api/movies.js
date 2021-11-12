import axios from 'axios';

const apiKey = 'c9ef2728095f70fe3dea055a56d5cc83';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  );
  return response.data;
};

const getMovies = {
  getPopularMovies,
};

export default getMovies;
