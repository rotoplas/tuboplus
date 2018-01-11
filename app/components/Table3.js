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

			<LinearGradient colors={["#deecfd","#c4d2e3"]} style={styles.tableTitle}>
					<Text style={styles.tit1}>{`Código`}</Text>
					{this.props.labels.map((item, key) =>
						<View key={key} >
								<Text style={styles.tit2}>{`${item}`}</Text>
						</View>
					)}
			</LinearGradient>
        <FlatList keyExtractor={this.keyExtractor}
									data={this.props.values}
        	renderItem={({item}) =>
                <View style={styles.tableTexts}>
                  <Text style={styles.innerText}>{item.key}</Text>
									{item.items.map((citem, ckey) =>
										<View key={ckey} >
												<Text style={styles.tit2}>{`${citem.valor}`}</Text>
										</View>
									)}
                </View> }/>
       </View>
		);
	}
}

const styles = StyleSheet.create({


    table:{
      flexDirection: 'column',
      width: '100%',
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

});

export default Table3;
