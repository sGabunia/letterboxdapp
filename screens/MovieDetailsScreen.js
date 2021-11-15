import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovieDetails} from '../features/movies/movieDetailsSlice';
import {StyleSheet, Text, View} from 'react-native';
import Movie from '../components/Movie';
import GalleryItemLoader from '../components/GalleryItemLoader';

const MovieDetailsScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {itemId} = route.params;
  const {movie, status, error} = useSelector(state => state.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(itemId));
  }, [itemId]);

  const isLoading = status === 'idle' || status === 'loading';

  if (status === 'failed') {
    return (
      <View>
        <Text>Loading error</Text>
      </View>
    );
  }

  if (isLoading) {
    return <GalleryItemLoader />;
  }
  return <Movie movie={movie} />;
};

export default MovieDetailsScreen;
