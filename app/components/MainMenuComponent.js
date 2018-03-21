import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, TouchableHighlight, ScrollView,  NetInfo, Modal, AsyncStorage, TextInput, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import {
  StackNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import CheckBox from 'react-native-modest-checkbox'
import { Select, Option } from 'react-native-chooser';
import Icon from 'react-native-vector-icons/FontAwesome';
import update from 'react-addons-update';
import FormatUtil from '../lib/format';

class MainMenuComponent extends Component{

	constructor(props) {
		super(props);
    this.navigateTo = this.navigateTo.bind(this);
    this.dispatchConnected = this.dispatchConnected.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.onSendFrom = this.onSendFrom.bind(this);
		this.state = {
			listMenuItems: [
        {key: '1', title:'Ventajas de Tuboplus', imageIcon:require('../../assets/img/icon1.png'), colors: ["#24b9dc","#0196b9"], componentName: 'BenefitsComponent'},
				{key: '2', title:'Catálogo', imageIcon:require('../../assets/img/icon2.png'), colors: ["#24a5db","#0182b9"], componentName: 'CategoriesComponent'},
				{key: '3', title:'Proceso de termofusión', imageIcon:require('../../assets/img/icon3.png'), colors: ["#22a3da","#0183b9"], componentName: 'TermofusionComponent'},
				{key: '4', title:'Correspondencias', imageIcon:require('../../assets/img/icon4.png'), colors: ["#3e7bc0","#2663a9"], componentName: 'EquivalenceComponent'},
				{key: '5', title:'Vida Útil', imageIcon:require('../../assets/img/icon5.png'), colors: ["#165585","#0e3553"], componentName: 'TimeLifeComponent'},
				{key: '6', title:'Localiza a un distribuidor', imageIcon:require('../../assets/img/icon6.png'), colors: ["#00204d","#001431"], componentName: 'ContactformComponent'},
				{key: '7', title:'Contáctenos', imageIcon:require('../../assets/img/icon7.png'), colors: ["#0f0f22","#000917"], componentName: 'ContactComponent'}
			],
      modalVisible: false,
      isRegistered: false,
      isSending: false,
      form: {
        placeholderNombres: 'Nombres',
        placeholderEmail: 'Email',
				placeholderApellidos: 'Apellidos'
      },
			isSendedForm: false,
			placeholderNombres: 'Nombres',
			placeholderEmail: 'Email',
			placeholderApellidos: 'Apellidos'
		};
	}

	static navigationOptions = {};

  async componentDidMount() {
    NetInfo.isConnected.fetch().then().done(() => {
      NetInfo.isConnected.addEventListener('connectionChange', this.dispatchConnected);
    });

		try {
		  const value = await AsyncStorage.getItem('IS_REGISTERED');
		  if (value !== null){
		    // We have data!!
				this.setState({ isRegistered: value === "true" ? true :false });
		  }

		} catch (error) {
			console.log(`Error retrieving data -> ${error}`);
		}

    console.log(this.props, this.state.isRegistered);

    if(this.props.isConnected && !(this.state.isRegistered)){
      this.setState({
        modalVisible: true
      });
    }
  }

  componentWillUnmount(){
    NetInfo.removeEventListener('connectionChange', this.dispatchConnected);
  }

  navigateTo(item){
    this.props.navigation.navigate(item.componentName, { category : item.title })
  }

  dispatchConnected(isConnected = false){
   this.props.dispatch(this.props.screenProps.setIsConnected({ isConnected: isConnected }));
 }

	renderItem = ({item}) => (
				<TouchableHighlight
        underlayColor={'transparent'}
		      onPress={() => this.navigateTo(item)}>
					<LinearGradient colors={item.colors} style={styles.linearGradient} key={item.key}>
							<Image style={styles.iconItem} source={item.imageIcon}/>
						 <View style={styles.textItem}>
							 <Text style={styles.menuTit}>{item.title}</Text>
						 </View>
				 </LinearGradient>
		    </TouchableHighlight>
  );

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  validateForm(state){
     let valid = true;

     if(state.placeholderNombres == 'Nombres' || state.placeholderNombre == ""){
       valid = false;
     }

     if(state.placeholderApellidos == 'Apellidos' || state.placeholderApellidos == ""){
       valid = false;
     }

     if(state.placeholderEmail == 'Email' || state.placeholderEmail == ""){
       valid = false;
     }

     return valid;
  }

  onSendFrom(){
  if(!(this.state.isSending)){
    this.setState({isSendedForm: false, isSending: true});
    if(this.validateForm(this.state.form)){
      let payload = FormatUtil.toSubscribeForm(this.state.form);
      this.props.screenProps.sendSubscribeForm(payload).then(async (res) => {
          this.setState({ isSending : false, status : false, isSendedForm: true });
          if(this.props.postedSubscribeForm.status === "subscribed"){
            try {
              await AsyncStorage.setItem('IS_REGISTERED', 'true');
              this.setState({ isRegistered: true });
              setTimeout(() => {
                /*this.setState({form: update(this.state.form, {placeholderNombres: {$set: 'Nombres'}})});
                this.setState({form: update(this.state.form, {placeholderEmail: {$set: 'Email'}})});
                this.setState({form: update(this.state.form, {placeholderApellidos: {$set: 'Apellidos'}})});*/
                this.setModalVisible(!this.state.modalVisible)
              }, 700);
            } catch (error) {
              console.log(`Error saving data -> ${error}`);
            }
          }
      }).catch(err => {
          this.setState({ isSending : false, status : false, isSendedForm: true });
      });
    } else {
      this.setState({ isSending : false });
      Alert.alert(
        'Error',
        'Rellena los datos del formulario.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
  }
}

	render() {
    var popup = <View></View>;
    var message = <View></View>;

  if(this.state.isSendedForm){
    if(this.props.postedSubscribeForm.status === 400  && this.props.postedSubscribeForm.title === "Member Exists"){
      message = <View>
                  <Text>El usuario ya se encuentra registrado!</Text>
                </View>;
    } else if(this.props.postedSubscribeForm.status === "subscribed"){
      message = <View>
                  <Text>El usuario ha sido registrado satisfactoriamente!</Text>
                </View>;
    } else if(this.props.postedSubscribeForm.status === 400 && this.props.postedSubscribeForm.title === "Invalid Resource"){
      message = <View>
                  <Text>Favor, revisar los datos enviados!</Text>
                </View>;
    } else {
      message = <View>
                  <Text>Ocurrió un error al enviar los datos!</Text>
                </View>;
    }
  }

  if(this.state.isSending){
    message = <View>
                <Text>Registrando usuario...</Text>
              </View>;
  }

  if(this.props.isConnected && this.state.modalVisible){
    popup =   <Modal
                   animationType="slide"
                   transparent={false}
                   visible={this.state.modalVisible}
                   onRequestClose={() => {}}>
                   <View style={styles.wrapperContactform}>
                     <View style={styles.wrapperForm} >

 		                   <Text style={styles.titContactform}>
                        	Registrate aquí!
                        </Text>

 											 {message}

 											 <View style={{paddingTop: 15}}></View>

                        <Text style={styles.inputLabel}>Nombres</Text>
                        <TextInput
                          style={styles.inputForm}
                          placeholder={this.state.placeholderNombres}
                          onChangeText={(placeholderNombres) => this.setState({form: update(this.state.form, {placeholderNombres: {$set: placeholderNombres}})})}
                          />

 											<Text style={styles.inputLabel}>Apellidos</Text>
 	                    <TextInput
 	                      style={styles.inputForm}
 	                      placeholder={this.state.placeholderApellidos}
 	                      onChangeText={(placeholderApellidos) => this.setState({form: update(this.state.form, {placeholderApellidos: {$set: placeholderApellidos}})})}
 	                      />

                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                          style={styles.inputForm}
                          placeholder={this.state.placeholderEmail}
                          onChangeText={(placeholderEmail) => this.setState({form: update(this.state.form, {placeholderEmail: {$set: placeholderEmail}})})}
                          />

                        <LinearGradient
                            colors={["#1a4585","#012d6c"]}
                            style={styles.butEnviar}>
                            <TouchableHighlight underlayColor={'transparent'}
                              onPress={() => {this.onSendFrom()}}>
                              <Text style={styles.txtBut}>Enviar</Text>
                            </TouchableHighlight>
                        </LinearGradient>

 											 <View style={styles.space}></View>

 											 <View style={styles.buttonsTermof}>
 												 <TouchableHighlight style={styles.botIniciar}
 												 underlayColor={'transparent'}
 												 onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
 													 <Text style={styles.botText}>Cerrar (X)</Text>
 												 </TouchableHighlight>
 											 </View>

                     </View>
                   </View>
                 </Modal>;
     }

		return (

      <ScrollView style={styles.wrapperMenu}
      overScrollMode={"auto"}
									showsVerticalScrollIndicator={false}
									bounces={false}>

      <Header {...this.props}/>

      { popup }

			<FlatList data={this.state.listMenuItems}
			  renderItem={this.renderItem}
			/>

      </ScrollView>
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
    paddingTop: "5.5%",
    paddingLeft: "14%",
    paddingBottom: "5.5%",
    flexDirection: 'row',
  },
  iconItem:{
    backgroundColor: 'transparent',
    width: '15%',
    height: 45,
    width:55,
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
    paddingTop: 40,
  },
  wrapperContactform:{
    height: '100%',
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
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 20,
  },
  botIniciar:{
    width: 30,
    height: 30,
    backgroundColor: '#CC0000',
    width: '40%',
    paddingTop: 8,
    paddingBottom:8,
    paddingLeft:15,
    paddingRight:15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
	botText:{
    fontFamily: 'Signika-Bold',
    fontSize: 12,
    color:'#ffffff'
  },
  buttonsTermof:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps(state){
  return {
    isConnected: state.isConnected,
    postedSubscribeForm: state.postedSubscribeForm
  }
}

export default connect(mapStateToProps)(MainMenuComponent);
