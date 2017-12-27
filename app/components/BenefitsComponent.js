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
    wrapperAll:{
     height: '100%',
     backgroundColor: '#edeef0',
    },
});

function mapStateToProps(state){
  return {
    searchedBenefit: state.searchedBenefit,
  }
}

export default connect(mapStateToProps)(BenefitsComponent);
