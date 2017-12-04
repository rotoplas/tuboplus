import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { TextField } from 'react-native-material-textfield';

class Login extends Component{

 constructor(props) {
    super(props);
    this.state = {
                  text: '',
                  placeholderEmail: 'Email',
                  placeholderPass: 'Contraseña',
                   };
  }

	render() {
		return (

		<LinearGradient style={styles.wrapperLogin} colors={["#37caec","#011330"]} >
        <Text style={styles.cleseBut}>X</Text>
			<View style={styles.logo}>
				<Image style={{width: 220, resizeMode: Image.resizeMode.contain}}  source={require('../assets/img/logo2.png')} />
			</View>
      <Text style={styles.titleLogin}>Iniciar sesión</Text>
        <View style={styles.formView}>
          <Text style={styles.emailLabel}>Email</Text>
          <TextInput
          style={styles.inputEmail}
          placeholder={this.state.placeholderEmail}
          />
          <Text style={styles.passLabel}>Contraseña</Text>
          <TextInput
          style={styles.inputPass}
          placeholder={this.state.placeholderPass}
          />
        </View>
        <Text style={styles.forgotYourPass}>¿Olvidó su contraseña?</Text>
        <Text style={styles.loginBut}>Inicar sesión</Text>
        <LinearGradient colors={["#1a4585","#012d6c"]} style={styles.ConnectFacebook}>
          <Text style={styles.txtFacebook}>
          Conectar con Facebook
          </Text>
        </LinearGradient>
       <Text style={styles.registerLink}>REGISTRARSE</Text>

		</LinearGradient>

		);
	}
}


const styles = StyleSheet.create({


  wrapperLogin: {
    paddingTop: '10%',
    paddingRight: '15%',
    paddingLeft: '15%',
    height: '100%',
    alignItems: 'center',
    },
  cleseBut: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 20,
    position: 'absolute',
    top: 25,
    right: 15,
    },
  titleLogin: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontFamily: 'Signika-SemiBold',
    fontSize: 26,
    },
  formView:{
    width: '100%',
    },
  emailLabel: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontFamily: 'Signika-Regular',
    fontSize: 18,
    marginTop: 15,
    },
  passLabel: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontFamily: 'Signika-Regular',
    fontSize: 18,
    marginTop: 15,
    },
  inputEmail:{
    backgroundColor: '#ffffff',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 4,
    width: '100%',
    marginTop: 10,
    },
  inputPass: {
    backgroundColor: '#ffffff',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 5,
    marginTop: 10,
    },
  forgotYourPass: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontFamily: 'Signika-Regular',
    marginTop: 20,
    },
  loginBut: {
    backgroundColor: '#09acd2',
    fontFamily: 'Signika-Regular',
    fontSize: 20,
    width: '100%',
    color: '#ffffff',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 20,
    },
  ConnectFacebook: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: '100%',
    marginTop: 10,
    paddingTop: 8,
    paddingBottom: 8,
  },
  txtFacebook: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontFamily: 'Signika-Regular',
    fontSize: 20,
  },
  registerLink: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontFamily: 'Signika-Regular',
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginTop: 50,
    textDecorationLine: 'underline',
  }

});


export default Login;
