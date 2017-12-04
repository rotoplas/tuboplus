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

const BasicApp = TabNavigator({
  Catalogo: {
    screen: ProductsList,
  },
  Correspondencia: {
    screen: Correspondencia,
  },
  Termofusion: {
    screen: Product,
  },
  Distribuidor: {
    screen: Contactform,
  },
  Contactenos: {
    screen: Contacto,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'blue',
    },
  },
});

export default class App extends Component<{}> {
  render() {
    return <BasicApp />
  }
}
