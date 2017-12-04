import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { TextField } from 'react-native-material-textfield';


import Header from './Header';
import MenuBottom from './MenuBottom';
import Table1 from './Table1';

class Correspondencia extends Component{

	render() {
		return (

		<View style={styles.wrapperContact}>

      <ScrollView>
      <Header />

      <Text style={styles.titCorresp}>Correspondencia</Text>

       <View style={styles.corresptBox}>
        <Text style={styles.titCorrespBox}>Ingresa datos</Text>
        <LinearGradient colors={["#1a4585","#012d6c"]} style={styles.butCorresp}>
          <Text style={styles.txtBut}>Correspondencia</Text>
        </LinearGradient>
      </View>

      <View style={styles.textContainer}>
       <Text style={styles.textIntro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tincidunt nibh, vestibulum mollis odio. Nunc aliquam ipsum sed ante mollis, vitae rhoncus felis dignissim. Duis tellus odio, facilisis vitae purus eget, pretium auctor nisl. </Text>
      </View>

      <View style={styles.tableCorresp}>
        <Table />
      </View>

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
    tableCorresp: {
      paddingLeft: '2%',
      paddingRight: '2%',
      marginTop: 20,
      },
    textContainer:{
      width: '96%',
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: 20,
      backgroundColor: 'transparent',
    },
    corresptBox:{
      backgroundColor: '#ffffff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      width: '96%',
      marginLeft: '2%',
      marginRight: '2%',
      marginTop:25,
      paddingLeft:15,
      paddingRight:15,
      paddingBottom:10,
      paddingTop: 10,
    },
    titCorresp:{
      width: '96%',
      marginLeft: '2%',
      marginRight: '2%',
      fontFamily: 'Signika-Bold',
      fontSize: 18,
      color:'#515253',
      marginTop:30,
      },
    titCorrespBox:{
      fontFamily: 'Signika-Bold',
      fontSize: 16,
      color:'#0075bc',
      },
    butCorresp: {
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
    },
    textIntro:{
      color: '#929292',
      fontSize: 16,
      marginLeft:10,
      marginRight:10,
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


export default Correspondencia;
