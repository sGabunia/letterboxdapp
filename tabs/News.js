import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const News = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>News</Text>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
