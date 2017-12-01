import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView,FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; 



class Table2 extends Component{

	render() {
		return (

      <View style={styles.table}>

        <FlatList data={[
        {key: 'menuItem1', innerText1: 'd', innerText2: '20'}, 
        {key: 'menuItem2', innerText1: 'D', innerText2: '27'}, 
        {key: 'menuItem3', innerText1: 'P', innerText2: '16'}, 
        {key: 'menuItem4', innerText1: 'L', innerText2: '53'}, 
        {key: 'menuItem5', innerText1: 'Peso', innerText2: '20'}]}
        
        renderItem={({item}) => 

                <View style={styles.tableRow}>
                  <LinearGradient colors={["#deecfd","#c4d2e3"]} style={styles.tableRow1}>
                    <Text style={styles.innerText1}>{item.innerText1}</Text>
                  </LinearGradient>
                  <View style={styles.tableRow2}>
                    <Text style={styles.innerText2}>{item.innerText2}</Text>
                  </View>
                </View>
      }
      />
       </View>

		);
	}	
}


const styles = StyleSheet.create({


    table:{
      flexDirection: 'column',
      width: '100%',
      }, 
    tableRow:{
        backgroundColor: '#ffffff',
        flexDirection: 'row',
      },
      tableRow1:{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        width: '50%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
      },
      tableRow2:{
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        width: '50%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
      },
      innerText1:{
        color: '#0075bc',
        fontFamily: 'Signika-Bold',
        fontSize: 14,
      },
      innerText2:{
        color: '#999999',
        fontFamily: 'Signika-Regular',
        fontSize: 14,
      },

    
});


export default Table2;
