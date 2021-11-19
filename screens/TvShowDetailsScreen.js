import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, Image, Text} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {selectDetails} from '../features/movies/topRatedSlice';

import AppHeaderText from '../components/Text/AppHeaderText';
import AppMainText from '../components/Text/AppMainText';

import colors from '../utils/colors';

const TvShowDetailsScreen = ({route}) => {
  const {itemId} = route.params;
  const {name, backdrop_path, overview, vote_average, vote_count, popularity} =
    useSelector(selectDetails(itemId));

  return (
    <View style={styles.wrapper}>
      <Image
        source={{
          uri: backdrop_path
            ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
            : `https://via.placeholder.com/300`,
        }}
        style={styles.image}
      />
      <View style={styles.showWrapper}>
        <AppHeaderText>{name}</AppHeaderText>
        <AppMainText>{overview}</AppMainText>
        <View style={styles.scores}>
          <View style={styles.votes}>
            <Ionicons name="star" size={22} color="yellow" />
            <AppHeaderText>{vote_average}/10</AppHeaderText>
            <AppMainText>{vote_count}</AppMainText>
          </View>
          <View style={styles.votes}>
            <Text style={styles.popularity}>{popularity}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TvShowDetailsScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  image: {
    width: '100%',
    height: 200,
  },
  showWrapper: {
    padding: 10,
  },
  scores: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  votes: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  popularity: {
    padding: 7,
    backgroundColor: 'yellow',
    fontWeight: 'bold',
  },
});
