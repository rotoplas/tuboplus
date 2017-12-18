import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableHighlight} from 'react-native';
import Slideshow from 'react-native-slideshow';
import { connect } from 'react-redux';
import { Select, Option} from 'react-native-chooser';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'

import Header from './Header';
import SelectProductsList from './SelectProductsList';
import FormatUtil from '../lib/format';
import MenuBottomComponent from './MenuBottomComponent';

class TermofusionComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      termofusionPayload: {},
      placeholder : 'Seleccionar diámetro...' ,
      dataTable : [],
      keysDT : [],
      totalDuration: 0,
      timerStart: false,
      timerReset: false,
    };

    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  componentDidMount() {
    this.initialFetch();
  }

  initialFetch = () => {
    this.props.screenProps.fetchTermofusion().then((res) => {
      let termofusionPayload = FormatUtil.toTermofusionPayload(this.props.searchedTermofusion);
      let keysDT = Object.keys(termofusionPayload.diameters[0].values);
      let ntotalDuration = Number(termofusionPayload.diameters[0].values['tiempo_cronometro']);
      this.setState({ termofusionPayload: termofusionPayload ,
        isLoading : false,
        dataTable : [termofusionPayload.diameters[0].values],
        keysDT : keysDT,
        totalDuration : ntotalDuration
       });
    }).catch(err => {
        console.log(`err -> ${err}`);
        this.setState({ isLoading : false });
    });
  };

  static navigationOptions = {};

  keyExtractor = (item, index) => item.key;

  renderItem = ({item}) => (<View>rewtre</View>);

  onSelect(value, label) {
    let ndataTable = this.state.termofusionPayload.diameters.filter(data => data.key === value);
    let keysDT = Object.keys(this.state.dataTable[0]);
    let ntotalDuration = Number(ndataTable[0].values['tiempo_cronometro']);
    this.resetTimer();
    this.setState({
      dataTable : [ndataTable[0].values],
      keysDT : keysDT,
      placeholder : label,
      totalDuration : ntotalDuration
    });
  }

  toggleTimer() {
		 this.setState({timerStart: !this.state.timerStart, timerReset: false});
	 }

	 resetTimer() {
		 this.setState({timerStart: false, timerReset: true});
	 }

	 toggleStopwatch() {
		 this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
	 }

	 resetStopwatch() {
		 this.setState({stopwatchStart: false, stopwatchReset: true});
	 }

	 getFormattedTime(time) {
			 this.currentTime = time;
	 };

  render() {
    if(this.state.isLoading){
      view = <Text> Cargando... </Text>;
    } else {

      view = (<View>

                <View>
                  <Text>Proceso de termofusión</Text>
                  <Slideshow dataSource={this.state.termofusionPayload.slides}/>
                </View>
                <View style={styles.filterBy} >
                    <View style={styles.container}>
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
                        {this.state.termofusionPayload.filters.map((item) => (
                          <Option key={item.key} value={item.key}>{item.value}</Option>
                        ))}
                      </Select>
                    </View>
                </View>
                <View>
                  {this.state.keysDT.map((item, key) =>
                    <View key={key}>
                      <Text>{`${item} -> ${this.state.dataTable[0][item]}`}</Text>
                    </View>
                  )}
                </View>
                <View>
                <Text>Timer (crónometro en reversa)</Text>
                <View>
                  <View>
                    <View>
                    <Timer
                        hours
                        totalDuration={this.state.totalDuration}
                        start={this.state.timerStart}
                        reset={this.state.timerReset}
                        options={options}
                        handleFinish={handleTimerComplete}
                        getTime={this.getFormattedTime} />
                    </View>
                  </View>
                  <View>
                    <TouchableHighlight onPress={this.resetTimer}>
                      <Text style={{fontSize: 30}}>Restablecer</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.toggleTimer}>
                      <Text style={{fontSize: 30}}>{!this.state.timerStart ? "Iniciar" : "Detener"}</Text>
                    </TouchableHighlight>
                  </View>
                </View>
                </View>
            </View>);
  }

  return (
    <View style={styles.wrapperAll} >

      <ScrollView style={styles.wrapperProducts}>

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
    wrapperProducts:{
     height: '100%',
     backgroundColor: '#edeef0',
    },
    iconItem:{
      width: 35,
      height: 30,
      backgroundColor: 'transparent',
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
    productItem:{
      width: '50%',
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection:'row',
      flexWrap:'wrap',
      },
    prodImage:{
      width: '100%',
      height: 200,
      shadowColor: '#000000',
      shadowOffset: { width: 4, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      marginBottom: 5,
      marginTop:5,
      resizeMode: 'contain',
      },
    productName:{
      color:'#515253',
      fontSize:16,
      width: '100%',
      fontFamily: 'Signika-Bold',
      backgroundColor: 'transparent',

    },
     prodDescription:{
      color:'#0075bc',
      fontSize:14,
      width: '100%',
      fontFamily: 'Signika-Regular',
      backgroundColor: 'transparent',
    },
    space:{
      paddingBottom: 60,
    },
    btnProduct:{
        padding: 30,
    },
    containerSelect: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    selectIconContainer:{
      backgroundColor: 'transparent',
      width: 30,
      right: 0,
      },
    selectIcon: {
      fontSize: 20,
      color: '#999999',
      width: '100%',
    },
});

const handleTimerComplete = () => alert("custom completion function");

const options = {
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  }
};

function mapStateToProps(state){
  return {
    searchedTermofusion: state.searchedTermofusion,
  }
}

export default connect(mapStateToProps)(TermofusionComponent);
