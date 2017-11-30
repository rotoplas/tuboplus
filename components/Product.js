import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';

import Header from './Header';
import AccordionProd from './AccordionProd';
import MenuBottom from './MenuBottom';


class Product extends Component {


  render() {
    return (

      <View style={styles.container}>

      <ScrollView>

        <Header />

        <View style={styles.imgContent}>
          <Image style={styles.imgProd}  source={require('../assets/img/img_contact.jpg')} />
        </View>
        
        <AccordionProd />

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
  imgContent: {
      flexDirection: 'row',
    },
  imgProd:{
      flex: 1,
      resizeMode: Image.resizeMode.contain,
      height: 280,
      },
  space:{
      paddingBottom: 50,
      },
});
 
export default Product;

