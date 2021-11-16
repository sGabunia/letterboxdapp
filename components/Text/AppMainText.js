import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AppMainText = ({children, style}) => {
  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};

export default AppMainText;

const styles = StyleSheet.create({
  text: {
    color: '#789',
    fontSize: 16,
  },
});
