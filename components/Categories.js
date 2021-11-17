import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import AppHeaderText from './Text/AppHeaderText';
import {useNavigation} from '@react-navigation/native';

const Categories = ({title, category}) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Categories', {
      title,
      category,
    });
  };

  return (
    <View style={styles.wrapper}>
      <AppHeaderText
        style={{
          textTransform: 'uppercase',
          fontSize: 16,
        }}>
        {title}
      </AppHeaderText>
      <Pressable onPress={handleNavigate}>
        <Text style={styles.buttonText}>see all</Text>
      </Pressable>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
