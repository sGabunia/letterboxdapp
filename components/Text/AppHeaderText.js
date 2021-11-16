import React from 'react';
import {StyleSheet, Text} from 'react-native';

const AppHeaderText = ({children, style}) => {
  return <Text style={{...styles.headerText, ...style}}>{children}</Text>;
};

export default AppHeaderText;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
});
