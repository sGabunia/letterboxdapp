import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Films from '../tabs/Films';
import Lists from '../tabs/Lists';
import News from '../tabs/News';
import Reviews from '../tabs/Reviews';

const Tab = createMaterialTopTabNavigator();

const PopularMoviesNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FILMS" component={Films} />
      <Tab.Screen name="LISTS" component={Lists} />
      <Tab.Screen name="NEWS" component={News} />
      <Tab.Screen name="REVIEWS" component={Reviews} />
    </Tab.Navigator>
  );
};

export default PopularMoviesNavigator;
