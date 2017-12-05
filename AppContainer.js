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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from './app/actions';
import Product from './app/components/Product';
import ProductsList from './app/components/ProductsList';
import Correspondencia from './app/components/Correspondencia';
import Contactform from './app/components/Contactform';
import Contacto from './app/components/Contact';

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

class AppContainer extends Component {
  render() {
    return <TabMenuBottom screenProps={this.props} />
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return state }, mapDispatchToProps)(AppContainer);
