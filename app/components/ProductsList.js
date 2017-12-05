import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput} from 'react-native';
import Slideshow from 'react-native-slideshow';

import Header from './Header';
import SelectProductsList from './SelectProductsList';




class ProductsList extends Component{
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
  render() {

    return (

    <View style={styles.wrapperAll} >

      <ScrollView style={styles.wrapperProducts} >

      <Header />

      <Slideshow
      dataSource={[
        {
          title: 'Lorem ipsum dolor sit amet, ',
          caption: 'Consectetur adipiscing elit. Praesent eget tincidunt felis, ut tempus mi.',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Lorem ipsum dolor sit amet, ',
          caption: 'Consectetur adipiscing elit. Praesent eget tincidunt felis, ut tempus mi.',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Lorem ipsum dolor sit amet,',
          caption: 'Consectetur adipiscing elit. Praesent eget tincidunt felis, ut tempus mi.',
          url: 'http://placeimg.com/640/480/any',
        },
      ]}/>


          <View style={styles.filterBy} >
             <SelectProductsList />
          </View>


      <FlatList numColumns={2} data={[
        {key: 'menuItem1', productName: 'Producto 1', prodDescription: 'Descripción 1', imageProd:require('../../assets/img/producto1.jpg')},
        {key: 'menuItem2', productName: 'Producto 2', prodDescription: 'Descripción 1', imageProd:require('../../assets/img/producto1.jpg')},
        {key: 'menuItem3', productName: 'Producto 3', prodDescription: 'Descripción 3', imageProd:require('../../assets/img/producto1.jpg')},
        {key: 'menuItem4', productName: 'Producto 4', prodDescription: 'Descripción 4', imageProd:require('../../assets/img/producto1.jpg')},
        {key: 'menuItem5', productName: 'Producto 5', prodDescription: 'Descripción 5', imageProd:require('../../assets/img/producto1.jpg')},
        {key: 'menuItem6', productName: 'Producto 6', prodDescription: 'Descripción 6', imageProd:require('../../assets/img/producto1.jpg')}]}

        renderItem={({item}) =>

                <View style={styles.productItem}>
                  <Image style={styles.prodImage} source={item.imageProd} />
                  <Text style={styles.productName}>{item.productName}</Text>
                  <Text style={styles.prodDescription}>{item.prodDescription}</Text>
                </View>
      }
      />
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
});


export default ProductsList;
