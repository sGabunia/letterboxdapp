import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {StyleSheet, View, Text} from 'react-native';

import Gallery from '../components/Gallery';
import GalleryItemLoader from '../components/GalleryItemLoader';
import Categories from '../components/Categories';

import {
  fetchPopularMovies,
  selectPopularMovies,
} from '../features/movies/popularMoviesSlice';
import colors from '../utils/colors';

const FilmsScreen = props => {
  const dispatch = useDispatch();
  const {movies, status, error} = useSelector(selectPopularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  const isLoading = status === 'idle' || status === 'loading';

  if (status === 'failed') {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      {isLoading ? (
        <GalleryItemLoader />
      ) : (
        <>
          <Gallery
            title="Popular this week"
            movies={movies}
            navigation={props.navigation}
          />
          <Categories title="Top Rated Movies" category="movie" />
          <Categories title="Top Rated TV Series" category="tv" />
        </>
      )}
    </View>
  );
};

export default FilmsScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 100,
    backgroundColor: colors.primary,
  },
});
