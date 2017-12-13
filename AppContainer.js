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
import MainMenuComponent from './app/components/MainMenuComponent';
import MenuBottomComponent from './app/components/MenuBottomComponent';
import ProductComponent from './app/components/ProductComponent';
import CategoriesComponent from './app/components/CategoriesComponent';
import ProductsXCategoryComponent from './app/components/ProductsXCategoryComponent';
import EquivalenceComponent from './app/components/EquivalenceComponent';
import ContactformComponent from './app/components/ContactformComponent';
import ContactComponent from './app/components/ContactComponent';

const RootStack = StackNavigator({
  MainMenuComponent: {
    screen: MainMenuComponent
  },
  CategoriesComponent: {
    screen: CategoriesComponent
  },
  ProductsXCategoryComponent: {
    screen: ProductsXCategoryComponent ,
  },
  ProductComponent: {
    screen: ProductComponent,
  },
  EquivalenceComponent: {
    screen: EquivalenceComponent,
  },
  ContactformComponent: {
    screen: ContactformComponent,
  },
  ContactComponent: {
    screen: ContactComponent,
  },
},{
    headerMode: 'none',
    animationEnabled: false,
    swipeEnabled: false,
    lazy: false,
    navigationOptions: {
     gesturesEnabled: false,
    },
});

class AppContainer extends Component {
  render() {
    return <RootStack screenProps={this.props} />;
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return state }, mapDispatchToProps)(AppContainer);
