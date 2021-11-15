import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import ActorDetalsScreen from '../screens/ActorDetalsScreen';

const Stack = createNativeStackNavigator();

const MovieDetailsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
      <Stack.Screen name="ActorDetails" component={ActorDetalsScreen} />
    </Stack.Navigator>
  );
};

export default MovieDetailsNavigator;
