import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {StyleSheet} from 'react-native';

import Films from '../tabs/Films';
import Lists from '../tabs/Lists';
import News from '../tabs/News';
import Reviews from '../tabs/Reviews';

import colors from '../utils/colors';

const Tab = createMaterialTopTabNavigator();

const PopularMoviesNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: styles.indicator,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.label,
      }}>
      <Tab.Screen name="FILMS" component={Films} />
      <Tab.Screen name="LISTS" component={Lists} />
      <Tab.Screen name="NEWS" component={News} />
      <Tab.Screen name="REVIEWS" component={Reviews} />
    </Tab.Navigator>
  );
};

export default PopularMoviesNavigator;

const styles = StyleSheet.create({
  tabBar: {backgroundColor: colors.secondary},
  indicator: {backgroundColor: 'green', height: 5},
  label: {color: '#fff', fontWeight: 'bold'},
});
