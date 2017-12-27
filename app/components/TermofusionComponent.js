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
import SlidesTilesComponent from './SlidesTilesComponent';
import AccordionProductComponent from './AccordionProductComponent';

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

   onChangeView(e){
     this.props.navigation.navigate('StepInfoSingleComponent', { step : e.image.key });
   }

  render() {
    if(this.state.isLoading){
      view = <Text> Cargando... </Text>;
    } else {
      const sections = [
          {
            title: 'Tiempos de calentamiento para la termofusión',
            content:
            <View>
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
              <Text style={styles.titCronometro}>Timer (crónometro en reversa)</Text>
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
                  <TouchableHighlight underlayColor={'transparent'} onPress={this.resetTimer}>
                    <Text style={{fontSize: 30}}>Restablecer</Text>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={'transparent'} onPress={this.toggleTimer}>
                    <Text style={{fontSize: 30}}>{!this.state.timerStart ? "Iniciar" : "Detener"}</Text>
                  </TouchableHighlight>
                </View>
              </View>
              </View>
            </View>
          }
      ];
      view = (<View>
                <View>
                  <Text style={styles.titTermof}>Proceso de termofusión</Text>
                  <SlidesTilesComponent dataSource={this.state.termofusionPayload.slides}
                                        onPress={(img) => { this.onChangeView(img) }}/>
                </View>
                <AccordionProductComponent sections={sections} activeItem={0}/>
            </View>);
  }

  return (
    <View style={styles.wrapperAll} >

      <ScrollView style={styles.wrapperProducts}
      overScrollMode={"auto"}
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
    wrapperProducts:{
     height: '100%',
     backgroundColor: '#edeef0',
    },
    titTermof:{
      width: '96%',
      marginLeft: '2%',
      marginRight: '2%',
      fontFamily: 'Signika-Bold',
      fontSize: 18,
      color:'#515253',
      marginTop:30,
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
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      },
    space:{
      paddingBottom: 60,
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
