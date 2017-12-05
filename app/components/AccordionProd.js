import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import Table1 from './Table1';
import Table2 from './Table2';
import SelectPlanos from './SelectPlanos';



class AccordionProd extends Component {
  static navigationOptions = {
		tabBarLabel: 'AccordionProd',
		// Note: By default the icon is only shown on iOS. Search the showIcon option below.
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../../assets/img/icon1.png')}
				style={[styles.icon, {tintColor: tintColor}]}
			/>
		),
	};

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
        <Text style={styles.title}>Características</Text>
        <Table1 />
      </View>

  },
  {
    title: 'Planos',
    content:
    <View style={styles.contentPlano}>
      <Image style={{width: '100%', height:250, resizeMode: Image.resizeMode.contain}}  source={require('../../assets/img/plano.png')} />
      <View style={styles.selectPlanos}>
        <SelectPlanos />
      </View>
      <Table2 />
    </View>


  },
  {
    title: 'Equivalencias',
    content:

      <View style={styles.content}>
        <Table1 />
      </View>
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
  title:{
    fontSize: 18,
    color: '#0075bc',
    fontFamily: 'Signika-Regular',
    marginLeft: 20,
    marginBottom: 20,
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

export default AccordionProd;
