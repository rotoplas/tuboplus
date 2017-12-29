import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

class AccordionProductComponent extends Component {
  static navigationOptions = {};

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount(){}

  _renderContent(section) {
    return (
      <View style={styles.content}>
        {section.content}
      </View>
    );
  }

  _renderHeader(section, i, isActive) {
    return (
      <LinearGradient style={styles.tab} colors={["#19a5e1","#018dc9"]}>
          <Icon name='angle-down' style={[styles.iconHeader, isActive ? styles.active : styles.inactive]}></Icon>
          <Text style={styles.tabTitle}>{section.title}</Text>
      </LinearGradient>
    );
  }

  render() {
    return (
      <Accordion
        sections={this.props.sections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        initiallyActiveSection={this.props.activeItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    height: 60,
    justifyContent: 'center',
    paddingLeft: 30,
    },
  iconHeader: {
    width: 30,
    height: 30,
    fontSize: 24,
    position: 'absolute',
    right: 20,
  },
  tabTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Signika-Bold',
    textAlign: 'left',
  },
  content: {
    backgroundColor: '#fff',
    padding:'2%',
    backgroundColor: '#eeeff1',
  },
  active: {
    color: '#013178',
    backgroundColor: 'transparent',
    transform: [{ rotate: '180deg' }],
    right: 35,
    top:10,
  },
  inactive: {
    color: '#fff',
    backgroundColor: 'transparent',
  },
  selectPlanos: {
    backgroundColor: '#ffffff',
    height:44,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginTop:20,
    marginBottom: 20,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10,
    width: '100%',
    borderRadius: 4,
  }
});

export default AccordionProductComponent;
