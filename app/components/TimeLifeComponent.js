import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { Select, Option} from 'react-native-chooser';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from './Header';
import Table1 from './Table1';
import SelectVidaUtil from './SelectVidaUtil';
import MenuBottomComponent from './MenuBottomComponent';
import FormatUtil from '../lib/format';

class TimeLifeComponent extends Component {

	 constructor(props) {
	    super(props);
	    this.state = {
	      isLoading: true,
	      timeLifePayload: {},
				placeholder: "Selecciona la Temperatura",
				dataTable : [],
	    };
	  }

	componentDidMount() {
		this.initialFetch();
	}

	initialFetch = () => {
		//Fetch product by category and ID
		this.props.screenProps.fetchTimeLife().then((res) => {
			let timeLifePayload = FormatUtil.toTimeLifePayload(this.props.searchedTimeLife);
			idTempDef = Number(timeLifePayload.filters[0].key);
			let ndataTable = timeLifePayload.pressures.filter(data => data.idTemperature == idTempDef);
			this.setState({ timeLifePayload: timeLifePayload ,
				isLoading : false,
				timeLifePayload : timeLifePayload,
				dataTable : ndataTable,
			 });
		}).catch(err => {
				console.log(`err -> ${err}`);
				this.setState({ isLoading : false });
		});
	};

	onSelect(value, label) {
		idTempChanged = Number(value);
		let ndataTable = this.state.timeLifePayload.pressures.filter(data => data.idTemperature == idTempChanged);
		this.setState({
			placeholder : label,
			dataTable : ndataTable
		});
	}

	render() {
		if(this.state.isLoading){
			view = <Text> Cargando... </Text>;
		} else {
			view = <View>
								<View style={styles.titContainer}>
					       <Text style={styles.mainTitle}>{this.state.timeLifePayload.title}</Text>
					       <Text style={styles.subTitle}>{this.state.timeLifePayload.description}</Text>
					      </View>

					      <View style={styles.imgTableContain}>
					        <Image style={styles.imgTable}  source={{url : this.state.timeLifePayload.header.url}} />
					      </View>

					      <View style={styles.filterBy} >
									<Select
											onSelect = {this.onSelect.bind(this)}
											defaultText  = {this.state.placeholder}
											style = {{borderColor : 'transparent', backgroundColor : 'transparent', width: '100%'}}
											textStyle = {{color: '#999999'}}
											animationType = {'fade'}
											transparent = {true}
											backdropStyle = {{backgroundColor : 'rgba(0,0,0,0.5)'}}
											indicatorIcon = {<View style={styles.selectIconContainer}><Icon style={styles.selectIcon} name='angle-down'></Icon></View>}
											optionListStyle = {{backgroundColor : '#ffffff', borderColor:'#999999' }}>
										{this.state.timeLifePayload.filters.map((item) => (
											<Option key={item.key} value={item.key}>{item.value}</Option>
										))}
									</Select>
					      </View>

					      <View style={styles.tableContainer} >
									<Table1 dataTable={this.state.dataTable}
										titleLeft="años de Servicio"
										titleRight="Presión de servicio (kg/cm²) Tuboplus Fortech-CT® SDR 7.4"/>
					      </View>
			      </View>;
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
      height:44,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      marginTop:20,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:10,
      borderRadius: 4,
      },
    tableContainer:{
      width: '94%',
      marginLeft: '3%',
      marginRight: '3%',
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
			activeItem:{
				backgroundColor: '#013178',
				borderRightColor: '#ffffff',
				borderRightWidth: 1,
				paddingTop: 10,
				paddingBottom: 10,
				alignItems: 'center'
			}
});

function mapStateToProps(state){
  return {
		searchedTimeLife: state.searchedTimeLife
  }
}

export default connect(mapStateToProps)(TimeLifeComponent);
