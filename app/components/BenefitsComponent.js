import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import Header from './Header';
import FormatUtil from '../lib/format';
import MenuBottomComponent from './MenuBottomComponent';
import SlidesBenefitsComponent from './SlidesBenefitsComponent';

class BenefitsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      benefitsPayload: [],
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  initialFetch = () => {
    this.props.screenProps.fetchBenefit().then((res) => {
      let benefitsPayload = FormatUtil.toBenefitsPayload(this.props.searchedBenefit.slider);
      this.setState({
          benefitsPayload: benefitsPayload,
          isLoading : false,
       });
    }).catch(err => {
        console.log(`err -> ${err}`);
        this.setState({ isLoading : false });
    });
  };

  static navigationOptions = {};

  render() {
    console.log(this.state.benefitsPayload);
    if(this.state.isLoading){
      view = <Text> Cargando... </Text>;
    } else {
      view = (<View>
                <View>
                  <Text>Beneficios</Text>
                  <SlidesBenefitsComponent dataSource={this.state.benefitsPayload}/>
                </View>
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
    searchedBenefit: state.searchedBenefit,
  }
}

export default connect(mapStateToProps)(BenefitsComponent);
