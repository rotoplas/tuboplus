import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  NetInfo
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
import TermofusionComponent from './app/components/TermofusionComponent';
import StepInfoSingleComponent from './app/components/StepInfoSingleComponent';
import TimeLifeComponent from './app/components/TimeLifeComponent';
import BenefitsComponent from './app/components/BenefitsComponent';
import ProductsXSearchedComponent from './app/components/ProductsXSearchedComponent';

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
  TermofusionComponent: {
    screen: TermofusionComponent
  },
  StepInfoSingleComponent: {
    screen: StepInfoSingleComponent
  },
  TimeLifeComponent: {
    screen: TimeLifeComponent
  },
  BenefitsComponent:{
    screen: BenefitsComponent
  },
  ProductsXSearchedComponent:{
    screen: ProductsXSearchedComponent
  }
},{
    headerMode: 'none',
    animationEnabled: false,
    swipeEnabled: false,
    lazy: false,
    navigationOptions: {
     gesturesEnabled: false,
    },
    transitionConfig: () => ({
     transitionSpec: {
       duration: 300,
       easing: Easing.out(Easing.poly(4)),
       timing: Animated.timing,
     },
     screenInterpolator: sceneProps => {
       const { layout, position, scene } = sceneProps;
       const { index } = scene;

       const height = layout.initHeight;
       const translateY = position.interpolate({
         inputRange: [index - 1, index, index + 1],
         outputRange: [height, 0, 0],
       });

       const opacity = position.interpolate({
         inputRange: [index - 1, index - 0.99, index],
         outputRange: [0, 1, 1],
       });

       return { opacity, transform: [{ translateY }] };
     },
   }),
});

class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
      return ( <RootStack screenProps={this.props} /> );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return state }, mapDispatchToProps)(AppContainer);
