import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';

import color from '../utils/colors';

const Movie = ({movie}) => {
  const {movieDetails, movieCast, movieReviews} = movie;

  const director = movieCast.crew.find(
    movie => movie.known_for_department === 'Directing',
  );

  return (
    <ScrollView style={{backgroundColor: color.primary}}>
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
              <View style={{flex: 1}}>
                <Text style={styles.title}>{movieDetails.original_title}</Text>
                <Text>Directed by</Text>
                <Text>{director.name}</Text>
                <View>
                  <Text>{movieDetails.release_date.slice(0, 4)}</Text>
                  <Text>{movieDetails.runtime} mins</Text>
                  <Text>Trailer</Text>
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
          <View></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Movie;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  header: {
    flexDirection: 'row',
  },
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
  title: {
    fontSize: 24,
    color: '#fff',
  },
});
