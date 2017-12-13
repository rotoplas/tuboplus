import React, { Component } from 'react';
import { FlatList, View, Text, Image, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
//import { StackNavigator } from 'react-navigation';


class MenuBottomComponent extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (

      <View style={styles.menuBottom}>

          <LinearGradient colors={["#1a83c3","#0069a9"]} style={styles.iconItemContenainer}>
          <TouchableHighlight
          	style={styles.inactiveItem}
						onPress={() => this.props.navigation.navigate('CategoriesComponent', { category : 'Ventajas de Tuboplus'})}>
              <Image style={styles.iconItem} source={require('../../assets/img/icon1.png')}/>
           </TouchableHighlight>
          </LinearGradient>

          <LinearGradient colors={["#1a83c3","#0069a9"]} style={styles.iconItemContenainer}>
          <TouchableHighlight
          style={styles.activeItem}
					onPress={() => this.props.navigation.navigate('EquivalenceComponent', { category : 'Catálogo'})}>
              <Image style={styles.iconItem} source={require('../../assets/img/icon2.png')}/>
           </TouchableHighlight>
          </LinearGradient>

          <LinearGradient colors={["#1a83c3","#0069a9"]} style={styles.iconItemContenainer}>
          <TouchableHighlight
          style={styles.inactiveItem}
					onPress={() => this.props.navigation.navigate('EquivalenceComponent', { category : 'Catálogo'})}>
              <Image style={styles.iconItem} source={require('../../assets/img/icon3.png')}/>
           </TouchableHighlight>
          </LinearGradient>

          <LinearGradient colors={["#1a83c3","#0069a9"]} style={styles.iconItemContenainer}>
          <TouchableHighlight
          style={styles.inactiveItem}
					onPress={() => this.props.navigation.navigate('ContactformComponent', { category : 'Contacta a los expertos'})}>
              <Image style={styles.iconItem} source={require('../../assets/img/icon4.png')}/>
           </TouchableHighlight>
          </LinearGradient>

          <LinearGradient colors={["#1a83c3","#0069a9"]} style={styles.iconItemContenainer}>
          <TouchableHighlight
          style={styles.inactiveItemLast}
					onPress={() => this.props.navigation.navigate('ContactComponent', { category : 'Contácto'})}>
              <Image style={styles.iconItem} source={require('../../assets/img/icon5.png')}/>
           </TouchableHighlight>
          </LinearGradient>

      </View>
		);
	}
}

const styles = StyleSheet.create({

  menuBottom:{
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
  	},
  iconItemContenainer: {
    width: '20%',
    },
  inactiveItem:{
    borderRightColor: '#ffffff',
    borderRightWidth: 1,
    backgroundColor: 'transparent',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
    },
  activeItem:{
    backgroundColor: '#013178',
    borderRightColor: '#ffffff',
    borderRightWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
    },
  inactiveItemLast:{
    backgroundColor: 'transparent',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
    },
  activeItemLast:{
    backgroundColor: '#013178',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
    },
  iconItem:{
    width: 35,
    height: 30,
    backgroundColor: 'transparent',
    },
});

function mapStateToProps(state){
  return {}
}


export default connect(mapStateToProps)(MenuBottomComponent);