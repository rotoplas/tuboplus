import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import Table from './Table';



class AccordionProd extends Component {



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

      const SECTIONS = [
  {
    title: 'Correspondencia',
    content: 
    
      <View style={styles.content}>
        <Text>Caracteristicas</Text>
        <Table />
      </View>

  },
  {
    title: 'Planos',
    content: 
    <View>
      <Image style={{width: '100%', height:300, resizeMode: Image.resizeMode.contain}}  source={require('../assets/img/plano.png')} />
    </View>
 
  },
  {
    title: 'Equivalencias',
 
  }
];

    return (

      <Accordion
        sections={SECTIONS}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        
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
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Signika-Bold',
    textAlign: 'left',
  },
  content: {
    backgroundColor: '#fff',
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

});
 
export default AccordionProd;

