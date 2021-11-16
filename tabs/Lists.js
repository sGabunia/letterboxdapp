import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Lists = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Lists</Text>
    </View>
  );
};

export default Lists;

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
