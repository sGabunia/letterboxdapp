import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StyleSheet} from 'react-native';

import PopularScreen from '../screens/PopularScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WatchListScreen from '../screens/WatchListScreen';
import ListsScreen from '../screens/ListsScreen';
import DiaryScreen from '../screens/DiaryScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import SettingsScreen from '../screens/SettingsScreen';

import color from '../utils/colors';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={PopularScreen}
        screenOptions={styles.drawer}>
        <Drawer.Screen
          name="Popular"
          component={PopularScreen}
          options={{
            drawerIcon: () => <Ionicons name="star" size={25} color="#fff" />,
          }}
        />
        <Drawer.Screen
          name="Search"
          component={SearchScreen}
          options={{
            drawerIcon: () => <Ionicons name="search" size={25} color="#fff" />,
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: () => (
              <Ionicons name="person-circle-outline" size={25} color="#fff" />
            ),
          }}
        />
        <Drawer.Screen
          name="Watchlist"
          component={WatchListScreen}
          options={{
            drawerIcon: () => (
              <Ionicons name="tv-outline" size={25} color="#fff" />
            ),
          }}
        />
        <Drawer.Screen
          name="Lists"
          component={ListsScreen}
          options={{
            drawerIcon: () => <Ionicons name="list" size={25} color="#fff" />,
          }}
        />
        <Drawer.Screen
          name="Diary"
          component={DiaryScreen}
          options={{
            drawerIcon: () => (
              <MaterialIcon name="notes" size={25} color="#fff" />
            ),
          }}
        />
        <Drawer.Screen
          name="Reviews"
          component={ReviewsScreen}
          options={{
            drawerIcon: () => (
              <MaterialIcon name="rate-review" size={25} color="#fff" />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: () => (
              <Ionicons name="settings" size={25} color="#fff" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  drawer: {
    drawerType: 'slide',
    drawerStyle: {
      backgroundColor: color.primary,
    },
    drawerLabelStyle: {
      color: '#fff',
      fontSize: 16,
    },
    headerStyle: {
      backgroundColor: color.secondary,
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTintColor: '#fff',
  },
});
