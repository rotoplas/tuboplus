import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'; 
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';


import Header from './Header';
import MenuBottom from './MenuBottom';
import Table from './Table';

class Vidautil extends Component{


   constructor(props) {
    super(props);
    this.state = { 
        label: 'es un placeholder...' };
        //this.onChangeTextDropdown()
    }


	render() {

    let data = [{
      value: 'Item 1',
    }, {
      value: 'Item 2',
    }, {
      value: 'Item 3',
    },
    ];

		return (

		<View style={styles.wrapperContact}>
      
      <ScrollView>
      <Header />

      <View style={styles.titContainer}>
       <Text style={styles.mainTitle}>TABLA DE PRESIONES PERMISIBLES</Text>
       <Text style={styles.subTitle}>Presiones adminisbles en conducir agua para Tuboplus Fortech-CT®</Text>
      </View>

      <View style={styles.imgTableContain}>
        <Image style={styles.imgTable}  source={require('../assets/img/img_tablapresiones.jpg')} />
      </View>

      <View style={styles.filterBy} >
            <Dropdown
              label={this.state.label}
              data={data}
              //onChangeText={this.onChangeTextDropdown()}
            />
      </View>
        

     <Table />
     
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


  wrapperContact: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eeeff1',
    },
    titContainer:{
      width: '96%',
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: 20,
      backgroundColor: 'transparent',
    },
    mainTitle:{
      color: '#515253',
      fontSize: 18,
      fontFamily: 'Signika-Bold',
    },
    subTitle:{
      color:'#0075bc',
      fontFamily: 'Signika-Regular',
      fontSize: 16,
      marginTop: 5,
      paddingRight: 30,
      },
    imgTableContain: {
      flexDirection: 'row',
    },
    imgTable:{
      flex: 1,
      resizeMode: Image.resizeMode.contain,
      height: 290,
      },
      filterBy:{
        backgroundColor: '#ffffff',
        height:60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:10,
      },
    table:{
      flexDirection: 'column',
      width: '96%',
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: 20,
      }, 
      tableTitle:{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
      },
      tit1:{
        width:'50%',
        color: '#0075bc',
        fontFamily: 'Signika-Regular',
        fontSize: 14,
      },
      tit2:{
        width:'50%',
        color: '#0075bc',
        fontFamily: 'Signika-Regular',
        fontSize: 14,
      },
      contactBoxInner:{
        width: '100%',
      },
      tableTexts:{
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        marginTop: 3,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
      },
      innerText: {
        width:'50%',
        fontFamily: 'Signika-Regular',
        color:'#999999',
        fontSize: 14,
      },
      space:{
      paddingBottom: 80,
      },
    
});


export default Vidautil;
