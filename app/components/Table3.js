import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView,FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Table3 extends Component{

	constructor(props) {
		super(props);
	}

	componentDidMount(){}

	keyExtractor = (item, index) => item.key;

	render() {
		return (
			<View style={styles.table}>


      <View style={styles.tableCod}>

			<LinearGradient colors={["#deecfd","#c4d2e3"]} style={styles.tableTitle}>
					<Text style={styles.tit1}>{`Código`}</Text>
			</LinearGradient>



        <FlatList keyExtractor={this.keyExtractor} 
									data={this.props.values}
        	renderItem={({item}) =>
                <View style={styles.tableTexts}>
                  <Text style={styles.tit5}>{item.key}</Text>
                </View> 
                }/>
      </View>

<ScrollView horizontal={true} style={styles.tableContent}>

        {/*<LinearGradient colors={["#deecfd","#c4d2e3"]} style={styles.tableTitle}>
          {this.props.labels.map((item, key) =>
                <Text key={key} style={styles.tit2}>{`${item}`}</Text>
          )}
        </LinearGradient>*/}


      {this.props.values.map((item, key) =>
                {item.items.map((citem, ckey) =>
                    <View key={ckey} >
                        <Text >{`${citem.valor}`}</Text>
                    </View>
                )}
      )}



        {/*
          <FlatList keyExtractor={this.keyExtractor} 
                  data={this.props.values}
          renderItem={({item}) =>
                <View style={styles.tableTexts}>
                  {item.items.map((citem, ckey) =>
                    <View key={ckey} style={styles.tit3}>
                        <Text style={styles.tit4}>{`${citem.valor}`}</Text>
                    </View>
                  )}
                </View> 
                }/>
          */}
</ScrollView>

       </View>
		);
	}
}

const styles = StyleSheet.create({


    table:{
      flexDirection: 'row',
      width: '100%',
      },
      tableCod:{
        width: '20%',
        },
      tableTitle:{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        width: '100%',
        height: 60,
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
        color: '#0075bc',
        fontFamily: 'Signika-Regular',
        fontSize: 12,
        textAlign:'center',
      },
      tit2:{
        width:'16%',
        color: '#0075bc',
        fontFamily: 'Signika-Regular',
        fontSize: 12,
        textAlign:'center',
      },
      tit3:{
        width:'16%',
      },
      tit4:{
        color: '#cccccc',
        fontFamily: 'Signika-Regular',
        fontSize: 12,
        textAlign:'center',
      },
      tit5:{
        color: '#cccccc',
        fontFamily: 'Signika-Regular',
        fontSize: 12,
        textAlign:'center',
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
        alignItems: 'center',
      },
      innerTextContain:{
        width:'100%',
        flexDirection: 'row',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        },
      innerText: {
        width:'100%',
        fontFamily: 'Signika-Regular',
        color:'#999999',
        fontSize: 14,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightColor: '#cc0000',
        borderLeftColor: '#cc0000',
        borderBottomColor: '#cc0000',
        borderTopColor: '#cc0000',
      },

});

export default Table3;
