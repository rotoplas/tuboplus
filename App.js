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

import Vidautil from './components/Vidautil';


export default class App extends Component<{}> {
  render() {
    return (
      <View >
        <Vidautil />
      </View>

    );
  }
}



