import React, { Component } from 'react';
import { FlatList, View, Text, Image, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import { StackNavigator } from 'react-navigation';


class MenuBottom extends Component{

	render() {
		return (

      <View style={styles.menuBottom}>

          <LinearGradient colors={["#1a83c3","#0069a9"]} style={styles.iconItemContenainer}>
          <TouchableHighlight
          style={styles.inactiveItem}>
              <Image style={styles.iconItem} source={require('../../assets/img/icon1.png')}/>
           </TouchableHighlight>
          </LinearGradient>


          <LinearGradient colors={["#1a83c3","#0069a9"]} style={styles.iconItemContenainer}>
          <TouchableHighlight
          style={styles.activeItem}>
              <Image style={styles.iconItem} source={require('../../assets/img/icon2.png')}/>
           </TouchableHighlight>
          </LinearGradient>


          <LinearGradient colors={["#1a83c3","#0069a9"]} style={styles.iconItemContenainer}>
          <TouchableHighlight
          style={styles.inactiveItem}>
              <Image style={styles.iconItem} source={require('../../assets/img/icon3.png')}/>
           </TouchableHighlight>
          </LinearGradient>

          <LinearGradient colors={["#1a83c3","#0069a9"]} style={styles.iconItemContenainer}>
          <TouchableHighlight
          style={styles.inactiveItem}>
              <Image style={styles.iconItem} source={require('../../assets/img/icon4.png')}/>
           </TouchableHighlight>
          </LinearGradient>

          <LinearGradient colors={["#1a83c3","#0069a9"]} style={styles.iconItemContenainer}>
          <TouchableHighlight
          style={styles.inactiveItemLast}>
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


export default MenuBottom;
