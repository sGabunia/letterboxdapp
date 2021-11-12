import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Reviews = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Reviews</Text>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
