import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableHighlight} from 'react-native';
import Slideshow from 'react-native-slideshow';
import { connect } from 'react-redux';
import {
  StackNavigator,
} from 'react-navigation';

import Header from './Header';
import SelectProductsList from './SelectProductsList';
import FormatUtil from '../lib/format';

class ProductsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      listProducts: [],
      slidesShow: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'http://placeimg.com/640/480/any',
        },
      ],
    };
  }

  componentDidMount() {
    this.getProductsList();
  }

  getProductsList = () => {
    this.props.screenProps.fetchProducts().then((res) => {
      let daux = FormatUtil.toGrid(this.props.searchedProducts);
      this.setState({ listProducts: daux , isLoading : false });
    }).catch(err => {
        this.setState({ error : err, isLoading : false });
    });
  };

  static navigationOptions = {
    tabBarLabel: 'ProductsList',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/img/icon2.png')}
        style={[styles.iconItem, {tintColor: tintColor}]}
      />
    ),
  };

  keyExtractor = (item, index) => item.key;

  renderItem = ({item}) => (
    <TouchableHighlight
      onPress={() => this.props.navigation.navigate('ProductsListXCategory', { category: item.key })}>
        <View style={styles.productItem}>
            {/* <Image style={styles.prodImage} source={item.image} /> */}
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.prodDescription}>{item.description}</Text>
        </View>
    </TouchableHighlight>
  );

  render() {
    if(this.state.isLoading){
      flProducts = <Text> Cargando... </Text>
    } else {
      flProducts = <FlatList
                      keyExtractor={ this.keyExtractor }
                      numColumns={2}
                      data={this.state.listProducts}
                      renderItem={this.renderItem}/>
   }

  return (
    <View style={styles.wrapperAll} >

      <ScrollView style={styles.wrapperProducts} >

        <Header />

        <Slideshow dataSource={this.state.slidesShow}/>

        <View style={styles.filterBy} >
            <SelectProductsList />
        </View>

        { flProducts }

       <View style={styles.space}></View>

     </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperProducts:{
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
});

function mapStateToProps(state){
  return {
    searchedProducts: state.searchedProducts,
  }
}

export default connect(mapStateToProps)(ProductsList);
