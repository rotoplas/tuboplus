import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { TextField } from 'react-native-material-textfield';


import Header from './Header';
import MenuBottom from './MenuBottom';

class Contacto extends Component{
	static navigationOptions = {
		tabBarLabel: 'Contacto',
		// Note: By default the icon is only shown on iOS. Search the showIcon option below.
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../assets/img/icon1.png')}
				style={[styles.icon, {tintColor: tintColor}]}
			/>
		),
	};
	render() {
		return (

		<View style={styles.wrapperContact}>

      <ScrollView>
      <Header />

      <View style={styles.imgContent}>
        <Image style={styles.imgContact}  source={require('../assets/img/img_contact.jpg')} />
      </View>

      <View style={styles.contactBox1}>
        <View style={styles.contactIcon}>
          <Image style={styles.contactIconImg} source={require('../assets/img/contact_icon1.png')} />
        </View>
        <View style={styles.innerTexts}>
         <Text style={styles.titContact}>Horarios de atención</Text>
         <Text style={styles.innerTxt}>Lunes - Sábados</Text>
         <Text style={styles.innerTxt}>8:00am - 7:00pm</Text>
        </View>
      </View>

      <View style={styles.contactBox2}>
        <View style={styles.contactBoxInner}>
          <View style={styles.contactIcon}>
              <Image style={styles.contactIconImg} source={require('../assets/img/contact_icon2.png')} />
          </View>
          <View style={styles.innerTexts}>
            <Text style={styles.titContact}>Teléfonos</Text>
            <Text style={styles.innerTxt}>018005063000</Text>
            <Text style={styles.innerTxt}>+5713467589</Text>
          </View>
        </View>
        <LinearGradient colors={["#1a4585","#012d6c"]} style={styles.butCall}>
          <Text style={styles.txtBut}>Llamar</Text>
        </LinearGradient>
      </View>
      </ScrollView>

      <View>
        <MenuBottom />
      </View>

		</View>

		);
	}
}


const styles = StyleSheet.create({


  wrapperContact: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eeeff1',
    },
    imgContent: {
      flexDirection: 'row',
    },
    imgContact:{
      flex: 1,
      resizeMode: Image.resizeMode.contain,
      height: 290,
      },
    contactBox1:{
      backgroundColor: '#ffffff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      marginLeft:15,
      marginRight:15,
      marginTop:15,
      paddingLeft:15,
      paddingRight:15,
      paddingBottom:10,
      paddingTop: 10,
      flexDirection: 'row',
    },
    contactBox2:{
      backgroundColor: '#ffffff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      marginLeft:15,
      marginRight:15,
      marginTop:15,
      paddingLeft:15,
      paddingRight:15,
      paddingBottom:10,
      paddingTop: 10,
    },
    contactBoxInner: {
      flexDirection: 'row',
      },
    titContact:{
      color: '#515253',
      fontFamily: 'Signika-Regular',
      fontSize: 18,
      width: '85%',
    },
    innerTexts:{
      justifyContent: 'space-between',
      },
    innerTxt:{
      color:'#013178',
      fontFamily: 'Signika-Regular',
      fontSize: 16,
    },
    contactIcon:{
      width: '15%',
    },
    contactIconImg: {
      resizeMode: Image.resizeMode.contain,
      height: 30,
      },
    butCall: {
      width: '100%',
      marginTop:15,
    },
    txtBut: {
      backgroundColor: 'transparent',
      color:'#ffffff',
      paddingBottom:10,
      paddingTop: 10,
      textAlign: 'center',
      fontFamily: 'Signika-Regular',
      fontSize: 16,
    }
});


export default Contacto;
