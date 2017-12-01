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

        <View style={styles.titlesContainer}>
          <Text style={styles.mainTitle}>TEE CON ROSCA CENTRAL HEMBRA</Text>
          <View style={styles.categoryContainer}>
            <Text style={styles.titleCat}>Categoría: </Text>
            <Text style={styles.category}>Válvulas</Text>
          </View>
        </View>

        <View style={styles.imgContent}>
          <Image style={styles.imgProd}  source={require('../assets/img/producto.jpg')} />
        </View>

        <Text style={styles.introContainer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tincidunt nibh, vestibulum mollis odio. Nunc aliquam ipsum sed ante mollis, vitae rhoncus felis dignissim. Duis tellus odio, facilisis vitae purus eget, pretium auctor nisl. </Text>
        
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
});
 
export default Product;

