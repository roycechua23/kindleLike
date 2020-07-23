import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ReaderScreen from './src/screens/ReaderScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Reader: ReaderScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'KindleLike',
  }
});

export default createAppContainer(navigator);

