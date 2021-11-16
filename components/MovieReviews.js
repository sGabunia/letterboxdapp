import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import AppMainText from './Text/AppMainText';

import {LogBox} from 'react-native';

const MovieReviews = ({movieReviews}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <SafeAreaView style={{paddingHorizontal: 8}}>
      <AppMainText style={styles.sectionTitle}>REVIEWS</AppMainText>
      {movieReviews.results.length !== 0 ? (
        <FlatList
          data={movieReviews.results}
          renderItem={({item}) => {
            const {author, content, author_details} = item;
            return (
              <View style={styles.reviewsWrapper}>
                <View style={styles.imageWrapper}>
                  <Image
                    source={{
                      uri: author_details.avatar_path
                        ? `https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg`
                        : `https://via.placeholder.com/150`,
                    }}
                    style={styles.image}
                  />
                </View>
                <View style={styles.contentWrapper}>
                  <AppMainText style={styles.title}>{author}</AppMainText>
                  <Text numberOfLines={10} style={styles.text}>
                    {content}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      ) : (
        <AppMainText style={styles.noReview}>There are no reviews</AppMainText>
      )}
    </SafeAreaView>
  );
};

export default MovieReviews;

const styles = StyleSheet.create({
  reviewsWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    marginBottom: 15,
  },
  contentWrapper: {
    padding: 15,
    flex: 3,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  imageWrapper: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginBottom: 10,
  },
  text: {
    fontSize: 13,
    color: '#789',
    marginTop: 15,
  },
  noReview: {
    paddingBottom: 20,
  },
  image: {width: 50, height: 50, borderRadius: 50},
});
