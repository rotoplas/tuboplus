import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { TextField } from 'react-native-material-textfield';
import Communications from 'react-native-communications';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import { connect } from 'react-redux';

import Header from './Header';
import MenuBottomComponent from './MenuBottomComponent';

class ContactComponent extends Component{

	constructor(props) {
    super(props);
    this.state = {
      phoneNumberCall: '+573225132806',
			totalDuration: 90000,
			timerStart: false,
			timerReset: false,
    };

		this.toggleTimer = this.toggleTimer.bind(this);
	 	this.resetTimer = this.resetTimer.bind(this);
	 	this.toggleStopwatch = this.toggleStopwatch.bind(this);
	 	this.resetStopwatch = this.resetStopwatch.bind(this);
  }

	static navigationOptions = {};

	toggleTimer() {
		 this.setState({timerStart: !this.state.timerStart, timerReset: false});
	 }

	 resetTimer() {
		 this.setState({timerStart: false, timerReset: true});
	 }

	 toggleStopwatch() {
		 this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
	 }

	 resetStopwatch() {
		 this.setState({stopwatchStart: false, stopwatchReset: true});
	 }

	 getFormattedTime(time) {
			 this.currentTime = time;
	 };

	render() {
		return (
		<View style={styles.wrapperContact}>

      <ScrollView>
      <Header />

      <View style={styles.imgContent}>
        <Image style={styles.imgContact}  source={require('../../assets/img/img_contact.jpg')} />
      </View>

      <View style={styles.contactBox1}>
        <View style={styles.contactIcon}>
          <Image style={styles.contactIconImg} source={require('../../assets/img/contact_icon1.png')} />
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
              <Image style={styles.contactIconImg} source={require('../../assets/img/contact_icon2.png')} />
          </View>
          <View style={styles.innerTexts}>
            <Text style={styles.titContact}>Teléfonos</Text>
            <Text style={styles.innerTxt}>018005063000</Text>
            <Text style={styles.innerTxt}>+5713467589</Text>
          </View>
        </View>
        <LinearGradient colors={["#1a4585","#012d6c"]} style={styles.butCall}>
					<TouchableHighlight
							onPress={() => {
								Communications.phonecall(this.state.phoneNumberCall, true);
								//Communications.email(["crijosicar@hotmail.com"], null, null, "Test", "Correo de prueba");
							}}>
          		<Text style={styles.txtBut}>Llamar</Text>
					</TouchableHighlight>
        </LinearGradient>
      </View>

      </ScrollView>
			<MenuBottomComponent {...this.props} />
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
    iconItem:{
    width: 35,
    height: 30,
    backgroundColor: 'transparent',
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

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(ContactComponent);
