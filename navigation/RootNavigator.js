import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DrawerNavigator from './DrawerNavigator';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

import colors from '../utils/colors';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer">
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={({route}) => ({
            title: route.params.title,
            headerStyle: styles.header,
            headerTitleStyle: styles.title,
            headerTintColor: '#fff',
          })}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={({route}) => ({
            title: route.params.title,
            headerStyle: styles.header,
            headerTitleStyle: styles.title,
            headerTintColor: '#fff',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.secondary,
  },
  title: {
    color: '#fff',
  },
});
