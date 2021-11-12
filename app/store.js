import {configureStore} from '@reduxjs/toolkit';
import popularMoviesSlice from '../features/movies/popularMoviesSlice';

export default configureStore({
  reducer: {
    popularMovies: popularMoviesSlice,
  },
});
