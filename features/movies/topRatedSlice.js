import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import getMovies from '../../api/movies';

const initialState = {
  moviesAndShows: [],
  status: 'idle',
  error: null,
  loadMoreStatus: 'idle',
  loadMoreError: null,
};

export const fetchTopRated = createAsyncThunk(
  'topRated/fetchTopRated',
  async ({category}) => {
    const response = await getMovies.getTopRated(category);
    return response.results;
  },
);

export const loadMoreTopRated = createAsyncThunk(
  'topRated/loadMoreTopRated',
  async ({category, index}) => {
    const response = await getMovies.getTopRated(category, index);
    return response.results;
  },
);

const topRatedSlice = createSlice({
  name: 'topRated',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchTopRated.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTopRated.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.moviesAndShows = action.payload;
      })
      .addCase(fetchTopRated.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loadMoreTopRated.pending, (state, action) => {
        state.loadMoreStatus = 'loading';
      })
      .addCase(loadMoreTopRated.fulfilled, (state, action) => {
        state.loadMoreStatus = 'succeeded';
        state.moviesAndShows.push(...action.payload);
      })
      .addCase(loadMoreTopRated.rejected, (state, action) => {
        state.loadMoreStatus = 'failed';
        state.loadMoreError = action.error.message;
      });
  },
});

export const {clearArray} = topRatedSlice.actions;

export const selectTopRated = ({topRated}) => topRated;
export const selectDetails =
  id =>
  ({topRated}) =>
    topRated.moviesAndShows.find(item => item.id === id);

export default topRatedSlice.reducer;
