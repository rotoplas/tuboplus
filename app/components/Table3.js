import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView,FlatList,Dimensions } from 'react-native';
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

<ScrollView horizontal={true}
						overScrollMode={'auto'}
						decelerationRate={'normal'}
            bounces={false}
            showsHorizontalScrollIndicator={true}
						style={styles.tableContent}
						>

				<View style={styles.tableInnerContent}>

         <LinearGradient colors={["#deecfd","#c4d2e3"]}
                        style={styles.tableTitle}>
          {this.props.labels.map((item, key) =>
                <Text key={key}
                      style={styles.tit2}>{`${item}`}</Text>
          )}
        </LinearGradient>

        {<FlatList keyExtractor={this.keyExtractor}
                  data={this.props.values}
									
          renderItem={({item}) =>
                <View style={styles.tableTexts}>
                  {item.items.map((citem, ckey) =>
                    <View key={ckey} style={styles.tit3}>
                        <Text style={styles.tit4}>{`${citem.valor}`}</Text>
                    </View>
                  )}
                </View>
                }/>}
				</View>
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
        width: 60,
        },
      tableTitle:{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        width: '100%',
        height: 70,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems:'center',
      },
			tableTitle2:{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        width: '100%',
        height: 70,
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
        width:80,
        color: '#0075bc',
        fontFamily: 'Signika-Regular',
        fontSize: 12,
        textAlign:'center',
      },
      tit3:{
        width:80,
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
        height: 70,
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
      },
      tableInnerContent:{
        marginLeft:2,
      }
});

export default Table3;
