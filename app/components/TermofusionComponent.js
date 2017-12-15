import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableHighlight} from 'react-native';
import Slideshow from 'react-native-slideshow';
import { connect } from 'react-redux';
import { Select, Option} from 'react-native-chooser';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  initialFetch = () => {
    this.props.screenProps.fetchTermofusion().then((res) => {
      let termofusionPayload = FormatUtil.toTermofusionPayload(this.props.searchedTermofusion);
      this.setState({ termofusionPayload: termofusionPayload , isLoading : false, dataTable : [termofusionPayload.diameters[0]] });
    }).catch(err => {
        console.log(`err -> ${err}`);
        this.setState({ isLoading : false });
    });
  };

  static navigationOptions = {};

  keyExtractor = (item, index) => item.key;

  renderItem = ({item}) => (<View>rewtre</View>);

  onSelect(value, label) {}

  childValues(items) {
    return {items.map((itemc) => <View><Text>{itemc.id}</Text></View>)};
  }

  render() {
    if(this.state.isLoading){
      view = <Text> Cargando... </Text>;
    } else {
      view = (<View>
                <Slideshow dataSource={this.state.termofusionPayload.slides}/>
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
                  {this.state.dataTable.map((item, key) => (
                    <View><Text>{item.key}</Text></View>
                    {<childValues items={item.values} />}
                  ))}
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

function mapStateToProps(state){
  return {
    searchedTermofusion: state.searchedTermofusion,
  }
}

export default connect(mapStateToProps)(TermofusionComponent);
