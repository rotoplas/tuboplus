import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Slideshow from 'react-native-slideshow';

import Header from './Header';
import MenuBottom from './MenuBottom';




class ProductsList extends Component{

  constructor(props) {
    super(props);
    this.state = { 
        label: 'placeholder...' 
      };
        //onChangeTextDropdown(){
          //label: ''
        //}
    }

  render() {

    let data = [{
      value: 'Item 1',
    }, {
      value: 'Item 2',
    }, {
      value: 'Item 3',
    },
    ];

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
            <Dropdown
              label={this.state.label}
              data={data}
              //onChangeText={this.onChangeTextDropdown()}
            />
          </View>
        

      <FlatList numColumns={2} data={[
        {key: 'menuItem1', productName: 'Producto 1', prodDescription: 'Descripción 1', imageProd:require('../assets/img/producto1.jpg')}, 
        {key: 'menuItem2', productName: 'Producto 2', prodDescription: 'Descripción 1', imageProd:require('../assets/img/producto1.jpg')}, 
        {key: 'menuItem3', productName: 'Producto 3', prodDescription: 'Descripción 3', imageProd:require('../assets/img/producto1.jpg')},
        {key: 'menuItem4', productName: 'Producto 4', prodDescription: 'Descripción 4', imageProd:require('../assets/img/producto1.jpg')},
        {key: 'menuItem5', productName: 'Producto 5', prodDescription: 'Descripción 5', imageProd:require('../assets/img/producto1.jpg')},
        {key: 'menuItem6', productName: 'Producto 6', prodDescription: 'Descripción 6', imageProd:require('../assets/img/producto1.jpg')}]}
        
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

    <View style={styles.wrapperProducts} >
      <MenuBottom />
    </View>
           

    </View>

    );
  } 
}

const styles = StyleSheet.create({

  wrapperProducts:{
     backgroundColor: '#edeef0',
    },
    filterBy:{
      backgroundColor: '#ffffff',
      height:60,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      marginLeft:10,
      marginRight:10,
      marginTop:20,
      paddingLeft:20,
      paddingRight:20,
      paddingBottom:10,
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
      marginTop:20,
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
