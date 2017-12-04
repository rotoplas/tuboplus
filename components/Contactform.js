import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import CheckBox from 'react-native-modest-checkbox'
import LinearGradient from 'react-native-linear-gradient';

import Header from './Header';
import MenuBottom from './MenuBottom';


class Contactform extends Component{
  static navigationOptions = {
    tabBarLabel: 'Contactform',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/icon1.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
 constructor(props) {
    super(props);
    this.state = {
                  text: '',
                  placeholderNombre: 'Nombre',
                  placeholderMunicipio: 'Delegación o Municipio',
                  placeholderEmail: 'Email',
                  placeholderColonia: 'Colonia',
                  placeholderTelefono: 'Teléfono',
                  placeholderMun: 'Delegación o Municipio',
                  placeholderCalle: 'Calle y número',
                  placeholderMensaje: 'Mensaje',
                   };
  }

  render() {


    return (

    <View style={styles.wrapperAll} >

      <ScrollView style={styles.wrapperContactform}>

       <Header />

       <View style={styles.wrapperForm} >
          <Text style={styles.textIntro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tincidunt nibh, vestibulum mollis odio. Nunc aliquam ipsum sed ante mollis.
          </Text>
          <Text style={styles.titContactform}>
          Contacta a los expertos
          </Text>
          <Text style={styles.inputLabel}>Nombre</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={this.state.placeholderNombre}
            />
          <Text style={styles.inputLabel}>Delegación o Municipio</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={this.state.placeholderMunicipio}
          />
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={this.state.placeholderEmail}
            />
          <Text style={styles.inputLabel}>Colonia</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={this.state.placeholderColonia}
          />
          <Text style={styles.inputLabel}>Teléfono</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={this.state.placeholderTelefono}
            />
          <Text style={styles.inputLabel}>Calle y número</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={this.state.placeholderCalle}
            />
            <Text style={styles.inputLabel}>Mensaje</Text>
          <TextInput style={styles.inputlMessage}
            style={styles.inputForm}
            placeholder={this.state.placeholderMensaje}
            multiline={true}
            />

          <View style={styles.checkboxItem}>
          <CheckBox
            label ='Acepto términos y condiciones. Aviso de privacidad'
            labelStyle={{fontSize: 12, color: '#626262'}}
            checkedImage={require('../assets/img/checked.png')}
            uncheckedImage={require('../assets/img/unchecked.png')}
            checkboxStyle={{ width: 20, height: 20 }}
            onChange={(checked) => console.log('Checked!')}
          />
          </View>
           <CheckBox
            label='Deseo recibir información de productos y servicios.'
            labelStyle={{fontSize: 12, color: '#626262'}}
            checkedImage={require('../assets/img/checked.png')}
            uncheckedImage={require('../assets/img/unchecked.png')}
            checkboxStyle={{ width: 20, height: 20 }}
            onChange={(checked) => console.log('Checked!')}
          />
          </View>

          <LinearGradient colors={["#1a4585","#012d6c"]} style={styles.butEnviar}>
              <Text style={styles.txtBut}>Enviar</Text>
          </LinearGradient>

       <View style={styles.space}></View>

       </ScrollView>

      <View style={styles.wrapperProducts} >
        <MenuBottom />
      </View>

    </View>

    );
  }
}

const styles = StyleSheet.create({

  wrapperContactform:{
     backgroundColor: '#edeef0',
    },
    wrapperForm:{
     width: '84%',
     marginLeft: '8%',
     marginRight: '8%',
     marginTop: 30,
    },
    textIntro:{
      color: '#929292',
      fontFamily: 'Signika-Regular',
      fontSize:16,
    },
    titContactform:{
      color: '#515253',
      fontFamily: 'Signika-Bold',
      fontSize:22,
      marginTop: 30,
      marginBottom: 20,
    },
    inputLabel: {
      color:'#013178',
      fontSize:18,
      fontFamily: 'Signika-Regular',
    },
    inputForm: {
    backgroundColor: '#ffffff',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
    },
    inputlMessage: {
    backgroundColor: '#ffffff',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
    height: 150,
    },
    checkboxItem: {
      marginBottom: 10,
    },
    butEnviar:{
      marginTop: 20,
      width: '84%',
      marginLeft: '8%',
      marginRight: '8%',
    },
    txtBut:{
      backgroundColor: 'transparent',
      color:'#ffffff',
      paddingBottom:10,
      paddingTop: 10,
      textAlign: 'center',
      fontFamily: 'Signika-Regular',
      fontSize: 16,
      },
    space:{
      paddingTop: 80,
    },
});


export default Contactform;
