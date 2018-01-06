import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableHighlight} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import CheckBox from 'react-native-modest-checkbox'
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { Select, Option} from 'react-native-chooser';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from './Header';
import MenuBottomComponent from './MenuBottomComponent';
import FormatUtil from '../lib/format';

class ContactformComponent extends Component{
static navigationOptions = {};

 constructor(props) {
    super(props);
    this.onSendFrom = this.onSendFrom.bind(this);
    this.state = {
                  isSending: false,
                  placeholderNombre: 'Nombre',
                  placeholderMunicipio: 'Delegación o Municipio',
                  placeholderEmail: 'Email',
                  placeholderColonia: 'Colonia',
                  placeholderTelefono: 'Teléfono',
                  placeholderCalle: 'Calle y número',
                  placeholderPais: 'País',
                  placeholderEstado: 'Estado',
                  placeholderCP: 'Código postal',
                  placeholderDirigidoA: 'Ventas',
                  placeholderMensaje: 'Mensaje',
                  placeholderTerminos: false,
                  placeholderRecibir: false
    }
  }

  onSelect(value, label) {
    this.setState({placeholderDirigidoA : value});
  }

  validateForm(state){
    let valid = true;

    if(state.placeholderNombre == 'Nombre' || state.placeholderNombre == ""){
      valid = false;
    }
    if(state.placeholderMunicipio == 'Delegación o Municipio' || state.placeholderMunicipio == ""){
      valid = false;
    }
    if(state.placeholderEmail == 'Email' || state.placeholderEmail == ""){
      valid = false;
    }
    if(state.placeholderColonia == 'Colonia' || state.placeholderColonia == ""){
      valid = false;
    }
    if(state.placeholderTelefono == 'Teléfono' || state.placeholderTelefono == ""){
      valid = false;
    }
    if(state.placeholderCalle == 'Calle y número' || state.placeholderCalle == ""){
      valid = false;
    }
    if(state.placeholderPais == 'País' || state.placeholderPais == ""){
      valid = false;
    }
    if(state.placeholderEstado == 'Estado' || state.placeholderEstado == ""){
      valid = false;
    }
    if(state.placeholderMensaje == 'Mensaje' || state.placeholderMensaje == ""){
      valid = false;
    }
    if(state.placeholderCP == 'Código postal' || state.placeholderCP == ""){
      valid = false;
    }
    if(state.placeholderTerminos.checked == false){
      valid = false;
    }
    console.log(state);
    return valid;
  }

  onSendFrom = () => {
    if(this.validateForm(this.state)){
      let payload = FormatUtil.toContactForm(this.state);
      console.log(payload);
      this.props.screenProps.sendContactForm(payload).then((res) => {
          console.log(this.props.postedContactForm);
          this.setState({ isSending : false, status : false });
      }).catch(err => {
          console.log(`err -> ${err}`);
          this.setState({ isSending : false, status : false });
      });
    } else {
      alert("no");
    }
  }

  render() {
    return (

    <View style={styles.wrapperAll} >

      <ScrollView style={styles.wrapperContactform}
      overScrollMode={"auto"}
									showsVerticalScrollIndicator={false}
									bounces={false}>

       <Header {...this.props}/>

       <View style={styles.wrapperForm} >
          {/*<Text style={styles.textIntro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tincidunt nibh, vestibulum mollis odio. Nunc aliquam ipsum sed ante mollis.
          </Text>*/}
          <Text style={styles.titContactform}>
          Contacta a los expertos
          </Text>
          <Text style={styles.inputLabel}>Nombre</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={this.state.placeholderNombre}
            onChangeText={(placeholderNombre) => this.setState({placeholderNombre})}
            />
          <Text style={styles.inputLabel}>Delegación o Municipio</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={this.state.placeholderMunicipio}
            onChangeText={(placeholderMunicipio) => this.setState({placeholderMunicipio})}
          />
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={this.state.placeholderEmail}
            onChangeText={(placeholderEmail) => this.setState({placeholderEmail})}
            />
          <Text style={styles.inputLabel}>Colonia</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={this.state.placeholderColonia}
            onChangeText={(placeholderColonia) => this.setState({placeholderColonia})}
          />
          <Text style={styles.inputLabel}>Teléfono</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={this.state.placeholderTelefono}
            onChangeText={(placeholderTelefono) => this.setState({placeholderTelefono})}
            />
          <Text style={styles.inputLabel}>Calle y número</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={this.state.placeholderCalle}
            onChangeText={(placeholderCalle) => this.setState({placeholderCalle})}
            />
            <Text style={styles.inputLabel}>País</Text>
            <TextInput
              style={styles.inputForm}
              placeholder={this.state.placeholderPais}
              onChangeText={(placeholderPais) => this.setState({placeholderPais})}
              />
            <Text style={styles.inputLabel}>Estado</Text>
            <TextInput
              style={styles.inputForm}
              placeholder={this.state.placeholderEstado}
              onChangeText={(placeholderEstado) => this.setState({placeholderEstado})}
              />
            <Text style={styles.inputLabel}>C.P.</Text>
              <TextInput
                style={styles.inputForm}
                placeholder={this.state.placeholderCP}
                onChangeText={(placeholderCP) => this.setState({placeholderCP})}
                />
            <Text style={styles.inputLabel}>Dirigido a</Text>
            <View style={styles.filterBy}>
              <Select
                  onSelect = {this.onSelect.bind(this)}
                  defaultText  = {this.state.placeholderDirigidoA}
                  style = {{borderColor : 'transparent', backgroundColor : 'transparent', width: '100%'}}
                  textStyle = {{color: '#999999'}}
                  animationType = {'fade'}
                  transparent = {true}
                  backdropStyle = {{backgroundColor : 'rgba(0,0,0,0.5)'}}
                  indicatorIcon = {<View ><Icon name='angle-down'></Icon></View>}
                  optionListStyle = {{backgroundColor : '#ffffff', borderColor:'#999999' }}>
                <Option value = 'Ventas'>Ventas</Option>
                <Option value = 'Comentarios'>Comentarios</Option>
                <Option value = 'Dudas'>Dudas</Option>
                <Option value = 'Quiero ser distribuidor'>Quiero ser distribuidor</Option>
                <Option value = 'Servicio técnico'>Servicio técnico</Option>
              </Select>
            </View>
            <Text style={styles.inputLabel}>Mensaje</Text>
            <TextInput style={styles.inputlMessage}
              style={styles.inputForm}
              placeholder={this.state.placeholderMensaje}
              numberOfLines = {5}
              multiline={true}
              onChangeText={(placeholderMensaje) => this.setState({placeholderMensaje})}/>
          <View style={styles.checkboxItem}>
          <CheckBox
            label ='Acepto términos y condiciones. Aviso de privacidad'
            labelStyle={{fontSize: 12, color: '#626262'}}
            checkedImage={require('../../assets/img/checked.png')}
            uncheckedImage={require('../../assets/img/unchecked.png')}
            checkboxStyle={{ width: 20, height: 20 }}
            onChange={(placeholderTerminos) => this.setState({placeholderTerminos})}/>
          </View>
           <CheckBox
            label='Deseo recibir información de productos y servicios.'
            labelStyle={{fontSize: 12, color: '#626262'}}
            checkedImage={require('../../assets/img/checked.png')}
            uncheckedImage={require('../../assets/img/unchecked.png')}
            checkboxStyle={{ width: 20, height: 20 }}
            onChange={(placeholderRecibir) => this.setState({placeholderRecibir})}/>
          </View>

          <LinearGradient
              colors={["#1a4585","#012d6c"]}
              style={styles.butEnviar}>
              <TouchableHighlight underlayColor={'transparent'}
                onPress={() => {this.onSendFrom()}}>
                <Text style={styles.txtBut}>Enviar</Text>
              </TouchableHighlight>
          </LinearGradient>

       <View style={styles.space}></View>

       </ScrollView>
       <MenuBottomComponent {...this.props} />
    </View>

    );
  }
}

const styles = StyleSheet.create({

  wrapperContactform:{
     height: '100%',
     backgroundColor: '#edeef0',
    },
    iconItem:{
    width: 35,
    height: 30,
    backgroundColor: 'transparent',
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
    borderRadius: 4,
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
    borderRadius: 4,
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
    filterBy:{
      backgroundColor: '#ffffff',
      height:44,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      marginTop:5,
      marginBottom:20,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:10,
      borderRadius: 4,
      width: '100%',
      },
});

function mapStateToProps(state){
  return {
    postedContactForm: state.postedContactForm
  }
}

export default connect(mapStateToProps)(ContactformComponent);
