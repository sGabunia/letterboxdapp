import React, {useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

import Films from '../tabs/Films';
import News from '../tabs/News';
import Reviews from '../tabs/Reviews';
import Lists from '../tabs/Lists';

import color from '../utils/colors';

const renderScene = SceneMap({
  first: Films,
  second: Reviews,
  third: Lists,
  fourth: News,
});

const Popular = () => {
  const [index, setIndex] = useState(0);
  const {width} = useWindowDimensions();

  const [routes] = React.useState([
    {key: 'first', title: 'FILMS'},
    {key: 'second', title: 'REVIEWS'},
    {key: 'third', title: 'LISTS'},
    {key: 'fourth', title: 'NEWS'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      sceneContainerStyle={styles.sceen}
      initialLayout={{width}}
    />
  );
};

export default Popular;

const styles = StyleSheet.create({
  sceen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {backgroundColor: color.secondary},
  indicator: {backgroundColor: color.ligthGreen, height: 4},
});
