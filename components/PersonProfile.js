import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import AppMainText from './Text/AppMainText';
import AppHeaderText from './Text/AppHeaderText';

const PersonProfile = ({person}) => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log(person.id)}>
      <View style={styles.profileWrapper}>
        <Image
          source={{
            uri: person.profile_path
              ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
              : `https://via.placeholder.com/150`,
          }}
          style={styles.image}
        />
        <AppHeaderText style={styles.person}>{person.name}</AppHeaderText>
        <AppMainText style={styles.role}>
          {person.character || person.job}
        </AppMainText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PersonProfile;

const styles = StyleSheet.create({
  profileWrapper: {
    alignItems: 'center',
    width: 120,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#fff',
    marginBottom: 10,
  },
  person: {
    fontSize: 12,
    marginBottom: 5,
  },
  role: {
    fontSize: 10,
  },
});
