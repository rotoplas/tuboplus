import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from './app/actions';
import Product from './app/components/Product';
import ProductsList from './app/components/ProductsList';
import ProductsListXCategory from './app/components/ProductsListXCategory';
import Correspondencia from './app/components/Correspondencia';
import Contactform from './app/components/Contactform';
import Contacto from './app/components/Contact';

const ProductsStack = StackNavigator({
  ProductsList: {
    screen: ProductsList,
  },
  ProductsListXCategory: {
    screen: ProductsListXCategory ,
  }
  },{
    headerMode: 'none',
    navigationOptions: {
     gesturesEnabled: false,
   },
});

const TabMenuBottom = TabNavigator({
    ProductsList: {
      screen: ProductsStack,
    },
    Correspondencia: {
      screen: Correspondencia,
    },
    Termofusion: {
      screen: Product,
    },
    Contactform: {
      screen: Contactform,
    },
    Contacto: {
      screen: Contacto,
    },
  }, {
    order: ["ProductsList", "Correspondencia", "Termofusion", "Contactform","Contacto"],
    lazy: true,
    initialRouteName: 'ProductsList',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: '#ffffff',
      inactiveTintColor: '#ffffff',
      activeBackgroundColor: '#013178',
      inactiveBackgroundColor: '#1a83c3',
      scrollEnabled: false,
      tabStyle: {
        borderRightColor: '#ffffff',
        borderRightWidth: 1,
      },
  },
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
