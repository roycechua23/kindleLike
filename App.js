import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import homeScreen from './src/screens/homeScreen';
import readerScreen from './src/screens/readerScreen';

const navigator = createStackNavigator({
  Home: homeScreen,
  Reader: readerScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'KindleLike',
  }
});

export default createAppContainer(navigator);

