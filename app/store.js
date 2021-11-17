import {configureStore} from '@reduxjs/toolkit';
import popularMoviesSlice from '../features/movies/popularMoviesSlice';
import movieDetailsSlice from '../features/movies/movieDetailsSlice';
import topRatedSlice from '../features/movies/topRatedSlice';

export default configureStore({
  reducer: {
    popularMovies: popularMoviesSlice,
    movieDetails: movieDetailsSlice,
    topRated: topRatedSlice,
  },
});
