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
	      view = <Text> Cargando... </Text>;
	    } else {

				const sections = [
	          {
	            title: 'Equivalencias',
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

									 <View style={styles.corresptBox}>
										<Text style={styles.titCorrespBox}>Ingresa datos</Text>
										<Select
												onSelect = {this.onChangeMillimeters.bind(this)}
												defaultText  = {this.state.defaultTextMillimeters}
												style = {{borderColor : 'transparent', backgroundColor : 'transparent', width: '100%'}}
												textStyle = {{color: '#999999'}}
												animationType = {'fade'}
												transparent = {true}
												backdropStyle = {{backgroundColor : 'rgba(0,0,0,0.5)'}}
												indicatorIcon = {<View style={styles.selectIconContainer}><Icon style={styles.selectIcon} name='angle-down'></Icon></View>}
												optionListStyle = {{backgroundColor : '#ffffff', borderColor:'#999999' }}>
											{this.state.dataTable.map((item) => (
												<Option key={item.key} value={item.key}>{item.innerLeft}</Option>
											))}
										</Select>
										<Select
												onSelect = {this.onChangeInches.bind(this)}
												defaultText  = {this.state.defaultTextInches}
												style = {{borderColor : 'transparent', backgroundColor : 'transparent', width: '100%'}}
												textStyle = {{color: '#999999'}}
												animationType = {'fade'}
												transparent = {true}
												backdropStyle = {{backgroundColor : 'rgba(0,0,0,0.5)'}}
												indicatorIcon = {<View style={styles.selectIconContainer}><Icon style={styles.selectIcon} name='angle-down'></Icon></View>}
												optionListStyle = {{backgroundColor : '#ffffff', borderColor:'#999999' }}>
											{this.state.dataTable.map((item) => (
												<Option key={item.key} value={item.key}>{item.innerRight}</Option>
											))}
										</Select>
										<TouchableHighlight
											onPress={() => {
												if(this.state.lastSelect != 0){
													if(this.state.lastSelect == 1){
														let inches = this.state.equivalencePayload.equivalences.filter(data => data.innerLeft == this.state.defaultTextMillimeters);
														this.setState({
															defaultTextInches : inches[0].innerRight
														});
													} else {
														let millimeters = this.state.equivalencePayload.equivalences.filter(data => data.innerRight == this.state.defaultTextInches);
														this.setState({
															defaultTextMillimeters : millimeters[0].innerLeft
														});
													}
												} else {
													alert("Debes seleccionar al manos una opción.");
												}
											}}>
											<LinearGradient colors={["#1a4585","#012d6c"]} style={styles.butCorresp}>
												<Text style={styles.txtBut}>Correspondencia</Text>
											</LinearGradient>
										</TouchableHighlight>
									</View>

									<View style={styles.textContainer}>
									 <Text style={styles.textIntro}>{ this.state.equivalencePayload.description }</Text>
									</View>

									<AccordionProductComponent sections={sections} activeItem={0} />
								</View>);
			}
			return (

			<View style={styles.wrapperContact}>

	      <ScrollView>

	      <Header />

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

function mapStateToProps(state){
  return {
		searchedEquivalence : state.searchedEquivalence
  }
}

export default connect(mapStateToProps)(EquivalenceComponent);
