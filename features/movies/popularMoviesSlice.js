import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import getMovies from '../../api/movies';

const initialState = {
  movies: [],
  status: 'idle',
  error: null,
};

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async () => {
    const response = await getMovies.getPopularMovies();
    return response.results;
  },
);

const popularMoviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchPopularMovies.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default popularMoviesSlice.reducer;
