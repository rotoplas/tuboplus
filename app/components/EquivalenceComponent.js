import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { TextField } from 'react-native-material-textfield';
import { connect } from 'react-redux';
import { Select, Option} from 'react-native-chooser';

import Header from './Header';
import Table1 from './Table1';
import MenuBottomComponent from './MenuBottomComponent';
import AccordionProductComponent from './AccordionProductComponent';
import FormatUtil from '../lib/format';

class EquivalenceComponent extends Component{

	static navigationOptions = {};

		constructor(props) {
			super(props);
			this.state = {
				equivalencePayload : {},
				isLoading : true,
				dataTable : [],
			  lastSelect : 0,
				defaultTextMillimeters : "Milímetros (mm)",
				defaultTextInches : "Pulgadas",
			};
		}

		componentDidMount() {
			this.initialFetch();
		}

	  initialFetch = () => {
			this.props.screenProps.fetchEquivalence().then((res) => {
	      let equivalencePayload = FormatUtil.toEquivalencePayload(this.props.searchedEquivalence);
	      this.setState({ equivalencePayload : equivalencePayload , isLoading : false, dataTable : equivalencePayload.equivalences });
	    }).catch(err => {
	        console.log(`err -> ${err}`);
	        this.setState({ isLoading : false });
	    });
	  };

		keyExtractor = (item, index) => item.key;

		onChangeMillimeters(value, label) {
			this.setState({
				lastSelect : 1,
				defaultTextMillimeters : label,
				defaultTextInches : "Pulgadas"
			});
		}

		onChangeInches(value, label) {
			this.setState({
				lastSelect : 2,
				defaultTextInches : label,
				defaultTextMillimeters : "Milímetros (mm)"
			});
		}

		render() {
			if(this.state.isLoading){
	      view = <Text style={styles.cargando}> Cargando... </Text>;
	    } else {

				const sections = [
	          {
	            title: 'Correspondencia',
	            content:
	              <View style={styles.content}>
											<Table1 dataTable={this.state.dataTable}
												titleLeft="Milímetros"
												titleRight="Pulgadas"/>
	              </View>
	          }
	      ];

				view = (<View>
									<Text style={styles.titCorresp}>Correspondencia</Text>

                  <View style={styles.tableCorrespond}>

									<Table1 dataTable={this.state.dataTable}
                          titleLeft="Milímetros"
                          titleRight="Pulgadas"/>
                  </View>

								</View>);
			}
			return (

			<View style={styles.wrapperContact}>

	      <ScrollView overScrollMode={"auto"}
										showsVerticalScrollIndicator={false}
										bounces={false}>

	      <Header {...this.props}/>

				{ view }

	      <View style={styles.space}></View>

	      </ScrollView>
				<MenuBottomComponent {...this.props} />
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
    selectCorrespond:{
    	width: '42%',
    	borderColor: '#2a6ebb',
    	borderWidth: 1,
    	marginTop: 20,
    	padding:0,
    	height: 40,
    },
    selectIconContainer:{
    	backgroundColor: '#2a6ebb',
    	paddingTop: 15,
    	paddingLeft: 10,
    	paddingRight: 10,
    	margin:0,
    	height: 39,
    },
    flechasCorresp:{
    	width: '14%',
    	marginTop: 24,
    	paddingLeft: '2%',
    	paddingRight: '2%',
    },
    selectIcon:{
    	color: '#ffffff',
    },
    iconItem:{
    width: 35,
    height: 30,
    backgroundColor: 'transparent',
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
    selectContainer:{
    	flexDirection: 'row',
    },
    titCorresp:{
      width: '96%',
      marginLeft: '2%',
      marginRight: '2%',
      fontFamily: 'Signika-Bold',
      fontSize: 18,
      color:'#515253',
      marginTop:30,
      marginBottom:30,
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
      cargando:{
    flex: 1,
      backgroundColor: 'transparent',
    },
    tableCorrespond: {
      marginLeft: 10,
      marginRight: 10,
    },
});

function mapStateToProps(state){
  return {
		searchedEquivalence : state.searchedEquivalence
  }
}

export default connect(mapStateToProps)(EquivalenceComponent);
