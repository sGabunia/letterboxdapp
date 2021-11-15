import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import getMovies from '../../api/movies';

const initialState = {
  movie: {},
  status: 'idle',
  error: null,
};

export const fetchMovieDetails = createAsyncThunk(
  'movie/fetchMovieDetails',
  async id => {
    const movieDetails = await getMovies.getMovieDetails(id);
    const movieCast = await getMovies.getMovieCast(id);
    const movieReviews = await getMovies.getMovieReviews(id);

    return {
      movieDetails,
      movieCast,
      movieReviews,
    };
  },
);

const movieDetailsSlice = createSlice({
  name: 'movie',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchMovieDetails.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        console.log(action.payload);

        state.status = 'succeeded';
        state.movie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieDetailsSlice.reducer;
