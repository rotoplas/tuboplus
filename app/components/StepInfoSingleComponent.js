import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableHighlight} from 'react-native';
import Slideshow from 'react-native-slideshow';
import { connect } from 'react-redux';
import { Select, Option} from 'react-native-chooser';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'

import Header from './Header';
import AccordionProductComponent from './AccordionProductComponent';
import MenuBottomComponent from './MenuBottomComponent';
import FormatUtil from '../lib/format';
import SlidesSingleInfoComponent from './SlidesSingleInfoComponent';


class StepInfoSingleComponent extends Component{

  constructor(props) {
    super(props);
    this.state = {
      singleTermofusionPayload: [],
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
    //Fetch product by category and ID
    this.props.screenProps.fetchTermofusion().then((res) => {
      let termofusionPayload = FormatUtil.toTermofusionPayload(this.props.searchedTermofusion);
      let keysDT = Object.keys(termofusionPayload.diameters[0].values);
      let ntotalDuration = Number(termofusionPayload.diameters[0].values['tiempo_cronometro']);
      let singleTermofusionPayload = [];
      this.setState({ termofusionPayload: termofusionPayload ,
        isLoading : false,
        dataTable : [termofusionPayload.diameters[0].values],
        keysDT : keysDT,
        totalDuration : ntotalDuration,
        singleTermofusionPayload: singleTermofusionPayload
       });
    }).catch(err => {
        console.log(`err -> ${err}`);
        this.setState({ isLoading : false });
    });
  };

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

  static navigationOptions = {};

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
            </View>
          }
      ];
      view = (<View>
                <SlidesSingleInfoComponent
                dataSource={this.state.termofusionPayload.slides}
                position={this.props.navigation.state.params.step - 1}
                />
                <AccordionProductComponent sections={sections} activeItem={0}/>
            </View>);
    }

    return (

      <View style={styles.container}>

      <ScrollView style={styles.containerScroll}
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
  imgContent: {
      flexDirection: 'row',
  },
  iconItem:{
    width: 35,
    height: 30,
    backgroundColor: 'transparent',
  },
  imgProd:{
      flex: 1,
      resizeMode: Image.resizeMode.contain,
      height: 240,
  },
  titlesContainer: {
      backgroundColor: '#eeeff1',
      padding: 20,
  },
  mainTitle: {
    color: '#515253',
    fontFamily: 'Signika-Bold',
    fontSize: 18,
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  titleCat: {
    color: '#0075bc',
    fontFamily: 'Signika-Bold',
    fontSize: 16,
    },
  category: {
    color: '#0075bc',
    fontFamily: 'Signika-Regular',
    fontSize: 16,
    },
  introContainer: {
    backgroundColor: '#eeeff1',
    color: '#929292',
    padding: 20,
    fontFamily: 'Signika-Regular',
    fontSize: 16,
    },
  space:{
    paddingBottom: 50,
  },
  titleTable: {
      fontSize: 18,
      color: '#0075bc',
      fontFamily: 'Signika-Regular',
      marginLeft: 20,
      marginBottom: 20,
  },
  containerSelect: {
    height: 40
  },
  selectIconContainer:{
    backgroundColor: 'transparent',
    width: 30,
    right: 10,
  },
  selectIcon: {
    fontSize: 20,
    color: '#999999',
    width: '100%',
  },
  containerScroll: {
    height : '100%',
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

export default connect(mapStateToProps)(StepInfoSingleComponent);
