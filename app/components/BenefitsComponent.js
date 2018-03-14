import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

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
    if(this.state.isLoading){
      view =  <Text style={styles.cargando}> Cargando... </Text>;

    } else {
      console.log(this.state.benefitsPayload);
      view = (<View>
                <View style={styles.wrapperBenefits}>
                  <Text style={styles.titBenefits}>Beneficios</Text>
                </View>
                 <View style={styles.sliderBenefits}>
                  <SlidesBenefitsComponent dataSource={this.state.benefitsPayload} />
                </View>
              </View>);
  }

  return (
    <View style={styles.wrapperAll} >


      <ScrollView scrollEnabled={false}
                  overScrollMode={"auto"}
									showsVerticalScrollIndicator={false}
									bounces={false}>

        <Header {...this.props}/>

        <LinearGradient colors={["#5dc1d9","#092d4a"]} style={styles.linearGradient} >

        { view }

        </LinearGradient>


     </ScrollView>


     <MenuBottomComponent {...this.props} />

    </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapperAll:{
     height: '100%',
     backgroundColor: '#edeef0',
    },
    linearGradient:{
      height: '100%',
    },
    wrapperBenefits:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      },
    titBenefits:{
      fontFamily: 'Signika-Bold',
      fontSize: 28,
      color:'#ffffff',
      marginTop:30,
      marginBottom:20,
      backgroundColor: 'transparent',
      },
      sliderBenefits:{
        width: '100%',
        paddingBottom: '60%',
        backgroundColor: 'transparent',
      },
      cargando:{
      backgroundColor: 'transparent',
      },
});

function mapStateToProps(state){
  return {
    searchedBenefit: state.searchedBenefit,
  }
}

export default connect(mapStateToProps)(BenefitsComponent);
