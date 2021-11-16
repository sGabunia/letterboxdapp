import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import PersonProfile from './PersonProfile';
import AppMainText from './Text/AppMainText';

const MovieInfo = ({movieCast}) => {
  const renderItem = ({item}) => {
    return <PersonProfile person={item} />;
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.cast}>
        <AppMainText style={styles.title}>CAST</AppMainText>
        <FlatList data={movieCast.cast} horizontal renderItem={renderItem} />
      </View>
      <View style={styles.cast}>
        <AppMainText style={styles.title}>CREW</AppMainText>
        <FlatList
          data={movieCast.crew}
          horizontal
          renderItem={renderItem}
          keyExtractor={item => item.credit_id}
        />
      </View>
    </View>
  );
};

export default MovieInfo;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    marginTop: 20,
  },
  title: {
    marginBottom: 10,
  },
  cast: {
    paddingVertical: 15,
    borderColor: '#ccc',
    borderTopWidth: 1,
  },
});
