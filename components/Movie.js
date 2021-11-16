import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import MovieHeader from './MovieHeader';
import MovieInfo from './MovieInfo';
import MovieReviews from './MovieReviews';

import colors from '../utils/colors';

const Movie = ({movie}) => {
  const {movieDetails, movieCast, movieReviews} = movie;

  const director = movieCast.crew.find(
    movie => movie.known_for_department === 'Directing',
  );

  return (
    <ScrollView style={styles.wrapper}>
      <MovieHeader movieDetails={movieDetails} director={director} />
      <MovieInfo movieCast={movieCast} />
      <MovieReviews movieReviews={movieReviews} />
    </ScrollView>
  );
};

export default Movie;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
  },
});
