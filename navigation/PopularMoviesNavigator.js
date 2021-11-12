import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PopularScreen from '../screens/PopularScreen';

const Stack = createNativeStackNavigator();

const PopularMoviesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PopularMovies"
        component={PopularScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PopularMoviesNavigator;
