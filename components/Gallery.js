import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Gallery = ({title, movies}) => {
  const handleItemClick = id => {
    console.log(id);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback onLongPress={() => handleItemClick(item.id)}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`}}
          style={styles.image}
        />
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList data={movies} renderItem={renderItem} horizontal />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    color: '#ccc',
    fontSize: 16,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  image: {
    width: 100,
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 2,
  },
});
