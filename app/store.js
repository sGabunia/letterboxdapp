import {configureStore} from '@reduxjs/toolkit';
import popularMoviesSlice from '../features/movies/popularMoviesSlice';
import movieDetailsSlice from '../features/movies/movieDetailsSlice';

export default configureStore({
  reducer: {
    popularMovies: popularMoviesSlice,
    movieDetails: movieDetailsSlice,
  },
});
