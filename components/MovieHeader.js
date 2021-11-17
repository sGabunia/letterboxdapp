import React from 'react';
import {StyleSheet, ImageBackground, Image, View} from 'react-native';

import AppHeaderText from './Text/AppHeaderText';
import AppMainText from './Text/AppMainText';

const MovieHeader = ({movieDetails, director}) => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
        }}
        resizeMode="cover"
        style={styles.ImageBackground}
      />
      <View style={styles.wrapper}>
        <View>
          <View style={styles.header}>
            <View style={styles.movie}>
              <AppHeaderText>{movieDetails.original_title}</AppHeaderText>
              <AppMainText style={styles.role}>Directed by</AppMainText>
              <AppMainText style={styles.director}>
                {director?.name}
              </AppMainText>
              <View style={styles.row}>
                <AppMainText>
                  {movieDetails.release_date.slice(0, 4)}
                </AppMainText>
                <AppMainText>{movieDetails.runtime} mins</AppMainText>
                <AppHeaderText style={styles.trailer}>Trailer</AppHeaderText>
              </View>
            </View>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`,
              }}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        </View>
        <View>
          <AppMainText style={styles.overview}>
            {movieDetails.overview}
          </AppMainText>
        </View>
      </View>
    </View>
  );
};

export default MovieHeader;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  header: {
    flexDirection: 'row',
  },
  movie: {flex: 1, paddingRight: 30},
  ImageBackground: {
    width: '100%',
    height: 250,
  },
  image: {
    width: 100,
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  role: {
    textTransform: 'uppercase',
  },
  director: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  trailer: {
    fontSize: 15,
    textTransform: 'uppercase',
  },
  overview: {
    marginTop: 20,
  },
});
