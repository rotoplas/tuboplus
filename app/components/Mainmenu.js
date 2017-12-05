import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, StackNavigator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';

class Mainmenu extends Component{

	render() {
		return (

      <View style={styles.wrapperMenu}>

      <Header />

			<FlatList data={[
        {key: 'menuItem1', title:'QUIÉNES SOMOS', imageIcon:require('../../assets/img/icon1.png'), colors: ["#0186be","#12a5c7"]},
				{key: 'menuItem2', title:'CÁTALOGO', imageIcon:require('../../assets/img/icon2.png'), colors: ["#24bee2","#019bbe"]},
				{key: 'menuItem3', title:'PROCESO DE TERMOFUSIÓN', imageIcon:require('../../assets/img/icon3.png'), colors: ["#23a6dd","#0184bb"]},
				{key: 'menuItem4', title:'CALCULADORA DE EQUIVALENCIAS', imageIcon:require('../../assets/img/icon4.png'), colors: ["#1881c1","#016aaa"]},
				{key: 'menuItem5', title:'CRONÓMETRO', imageIcon:require('../../assets/img/icon5.png'), colors: ["#005991","#00385c"]},
				{key: 'menuItem6', title:'CÁTALOGO', imageIcon:require('../../assets/img/icon6.png'), colors: ["#003455","#00243a"]},
				{key: 'menuItem7', title:'CONTÁCTENOS', text: 'Lorem ipsum', imageIcon:require('../../assets/img/icon7.png'), colors: ["#001e31","#00111b"]}]}

			  renderItem={({item}) =>
              <LinearGradient colors={item.colors} style={styles.linearGradient} key={item.key}>
                <Image style={styles.iconItem} source={item.imageIcon}/>
                <View style={styles.textItem}>
                  <Text style={styles.menuTit}>{item.title}</Text>
                </View>
              </LinearGradient>
			}
			/>

      </View>
		);
	}
}

const styles = StyleSheet.create({

   linearGradient: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    paddingTop: "5.65%",
    paddingLeft: "14%",
    paddingBottom: "5.65%",
    flexDirection: 'row',
  },
  iconItem:{
    backgroundColor: 'transparent',
    width: '15%',
    height: 45,
    },
  textItem: {
      justifyContent: 'space-between',
      width: '85%',
    },
  menuTit:{
  	color:'#ffffff',
  	fontSize:16,
  	width: '100%',
    fontFamily: 'Signika-Bold',
    backgroundColor: 'transparent',
    marginTop: 10,
    paddingLeft: 20,
  },

});


export default Mainmenu;
