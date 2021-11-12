import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {StyleSheet, View} from 'react-native';

import Gallery from '../components/Gallery';
import GalleryItemLoader from '../components/GalleryItemLoader';
import {fetchPopularMovies} from '../features/movies/popularMoviesSlice';

const FilmsScreen = () => {
  const dispatch = useDispatch();
  const {movies, status, error} = useSelector(
    ({popularMovies}) => popularMovies,
  );

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  const isLoading = status === 'idle' || status === 'loading';

  if (status === 'failed') {
    return (
      <View>
        <Text>Loading error</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      {isLoading ? (
        <GalleryItemLoader />
      ) : (
        <Gallery title="Popular this week" movies={movies} />
      )}
    </View>
  );
};

export default FilmsScreen;

const styles = StyleSheet.create({
  wrapper: {paddingHorizontal: 10, marginTop: 100},
});
