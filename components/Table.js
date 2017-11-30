import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'; 
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';


import Header from './Header';
import MenuBottom from './MenuBottom';

class Vidautil extends Component{

	render() {
		return (

      <View style={styles.table}>

      <LinearGradient colors={["#deecfd","#c4d2e3"]} style={styles.tableTitle}>
          <Text style={styles.tit1}>Años de Servicio</Text>
          <Text style={styles.tit2}>Presión de servicio (kg/cm2) Tuboplus Fortech-CT® SDR 7.4</Text>
      </LinearGradient>


        <FlatList data={[
        {key: 'menuItem1', innerText1: 'Lorem ipsum', innerText2: 'Lorem ipsum dolor sit amet, consectetur'}, 
        {key: 'menuItem2', innerText1: 'Lorem ipsum', innerText2: 'Lorem ipsum dolor sit amet, consectetur'}, 
        {key: 'menuItem3', innerText1: 'Lorem ipsum', innerText2: 'Lorem ipsum dolor sit amet, consectetur'}]}
        
        renderItem={({item}) => 

                <View style={styles.tableTexts}>
                  <Text style={styles.innerText}>{item.innerText1}</Text>
                  <Text style={styles.innerText}>{item.innerText2}</Text>
                </View>
      }
      />
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
