/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';


import Product from './components/Product';
import ProductsList from './components/ProductsList';
import Correspondencia from './components/Correspondencia';
import Contactform from './components/Contactform';
import Contacto from './components/Contact';

const TabMenuBottom = TabNavigator({
    ProductsList: {
      screen: ProductsList,
    },
    Correspondencia: {
      screen: Correspondencia,
    },
    Termofusion: {
      screen: ProductsList,
    },
    Contactform: {
      screen: Contactform,
    },
    Contacto: {
      screen: Contacto,
    },
  }, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#ffffff',
      activeBackgroundColor: '#013178',
      inactiveBackgroundColor: '#1a83c3',
      showLabel: false,
      tabStyle: {
        borderRightColor: '#ffffff',
        borderRightWidth: 1,
      },
  },
}, {
  initialRouteName: 'ProductsList',
});

export default class App extends Component<{}> {
  render() {
    return <TabMenuBottom />
  }
}
