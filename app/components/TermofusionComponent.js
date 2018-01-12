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

   onChangeView(e) {
     this.props.navigation.navigate('StepInfoSingleComponent', { step : e.image.key });
   }

  render() {
    if(this.state.isLoading){
      view = <Text style={styles.cargando}> Cargando... </Text>;
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
                        optionListStyle = {{backgroundColor : '#ffffff', borderColor:'#999999', height:360, }}>
                      {this.state.termofusionPayload.filters.map((item) => (
                        <Option key={item.key} value={item.key}>{item.value}</Option>
                      ))}
                    </Select>
                  </View>
              </View>
              <View>
                {this.state.keysDT
                  .filter(value => value !== "id" && value !== "tiempo_cronometro" && value !== "titulo")
                  .map((value, key) => (<View key={key}  style={styles.textsTermof}>
                                            <Text style={styles.text1} >{`${value}`.replace("_", " ")}</Text>
                                            <Text style={styles.text2}>{`${this.state.dataTable[0][value]}`}</Text>
                                        </View>))}
              </View>
              <View>
              <View style={styles.titContainerCron}>
                  <Text style={styles.titCronometro}>Timer (crónometro en reversa)</Text>
              </View>
                <View>
                  <View style={styles.timerContainer}>
                  <Timer
                      hours
                      totalDuration={this.state.totalDuration}
                      start={this.state.timerStart}
                      reset={this.state.timerReset}
                      options={options}
                      laps={false}
                      handleFinish={() => this.setState({timerStart: false, timerReset: true})}/>
                  </View>
                </View>
              <View>
                <View style={styles.buttonsTermof}>
                  <TouchableHighlight style={styles.botRestablecer}
                  underlayColor={'transparent'}
                  onPress={this.resetTimer}>
                    <Text style={styles.botText}>Restablecer</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.botIniciar}
                  underlayColor={'transparent'}
                  onPress={this.toggleTimer}>
                    <Text style={styles.botText}>{!this.state.timerStart ? "Iniciar" : "Detener"}</Text>
                  </TouchableHighlight>
                </View>
              </View>
              </View>
            </View>
          }
      ];
      view = (<View>
                <View style={styles.titContainer}>
                  <Text style={styles.titTermof}>Proceso de termofusión</Text>

                  <View style={styles.sliderTermof}>
                    <SlidesTilesComponent dataSource={this.state.termofusionPayload.slides}
                                          onPress={(img) => { this.onChangeView(img) }}/>
                  </View>
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
      fontFamily: 'Signika-Bold',
      fontSize: 22,
      color:'#0b2851',
      marginTop:30,
      marginBottom:30,
      },
    titContainer:{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      },
    filterBy:{
      backgroundColor: '#ffffff',
      height:44,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      marginTop:20,
      marginBottom:20,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:10,
      borderRadius: 4,
      },
    space:{
      paddingBottom: 100,
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
    botRestablecer:{
      backgroundColor: '#0b2851',
      paddingTop: 8,
      paddingBottom:8,
      paddingLeft:15,
      paddingRight:15,
      width: '49%',
      marginRight: '2%',
      justifyContent: 'center',
    alignItems: 'center',
    },
    botIniciar:{
      backgroundColor: '#2f75b7',
      width: '49%',
      paddingTop: 8,
      paddingBottom:8,
      paddingLeft:15,
      paddingRight:15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    botText:{
      fontFamily: 'Signika-Bold',
      fontSize: 12,
      color:'#ffffff'
      },
      buttonsTermof:{
        flexDirection: 'row',
      },
      timerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        },
      sliderTermof:{
        width: '100%',
        marginBottom: 30,
      },
      titCronometro:{
        fontSize: 16,
        color: '#2f75b7',
        fontFamily: 'Signika-Bold',
        fontWeight: '400',
      },
      titContainerCron:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      },
      textsTermof:{
        flexDirection: 'row',
        width: '94%',
        marginLeft: '3%',
        marginRight: '3%',
        marginBottom:8,
      },
      text1:{
        width: '70%',
        fontFamily: 'Signika-Regular',
        fontSize: 14,
        color: '#2f75b7',
      },
      text2:{
        width: '30%',
        fontFamily: 'Signika-Regular',
        fontSize: 14,
        color: '#666666',
      }
});

const options = {
  container: {
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 5,
    width: 'auto',
  },
  text: {
    fontSize: 44,
    color: '#0b2851',
    fontFamily: 'Signika-Bold',
    fontWeight: '400',
  },
  cargando:{
    flex: 1,
    backgroundColor: 'transparent',
  },
};

function mapStateToProps(state){
  return {
    searchedTermofusion: state.searchedTermofusion,
  }
}

export default connect(mapStateToProps)(TermofusionComponent);
