import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {fetchTopRated} from '../features/movies/topRatedSlice';
import colors from '../utils/colors';

import AppHeaderText from '../components/Text/AppHeaderText';
import AppMainText from '../components/Text/AppMainText';

const CategoriesScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {category} = route.params;
  const {moviesAndShows, status, error} = useSelector(({topRated}) => topRated);

  useEffect(() => {
    dispatch(fetchTopRated(category));
  }, [category]);
  console.log(category);

  const isLoading = status === 'idle' || status === 'loading';

  const handleNavigate = (itemId, title) => {
    navigation.navigate('MovieDetails', {
      itemId,
      title,
    });
  };

  if (isLoading) {
    return (
      <View style={styles.isLoading}>
        <ActivityIndicator color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={moviesAndShows}
        renderItem={({item}) => {
          const releaseYear = item.release_date || item.first_air_date;
          return (
            <TouchableWithoutFeedback
              onPress={() => handleNavigate(item.id, item.original_title)}>
              <View style={styles.movie}>
                <Image
                  source={{
                    uri: item.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
                      : `https://via.placeholder.com/300`,
                  }}
                  resizeMode="cover"
                  style={styles.image}
                />
                <View style={styles.movieContent}>
                  <AppHeaderText style={styles.movieTitle}>
                    {item.title || item.name}
                  </AppHeaderText>
                  <AppMainText style={styles.year}>
                    {releaseYear.slice(0, 4)}
                  </AppMainText>
                  <AppMainText>
                    <Ionicons name="star" size={18} color="yellow" />{' '}
                    {item.vote_average}
                  </AppMainText>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  isLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  wrapper: {
    backgroundColor: colors.primary,
    padding: 10,
  },
  movie: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: '#ccc',
  },
  movieContent: {
    flex: 1,
    marginLeft: 10,
  },
  movieTitle: {
    fontSize: 16,
  },
  year: {
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 120,
  },
});
