import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import Slideshow from 'react-native-slideshow';
import { connect } from 'react-redux';

import Header from './Header';
import SelectProductsList from './SelectProductsList';
import FormatUtil from '../lib/format';
import MenuBottomComponent from './MenuBottomComponent';

class ProductsXCategoryComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      listProductsXCategory: [],
      searchedProductsList: [],
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  static navigationOptions = ({ navigation }) => ({});

  initialFetch = () => {
    //Fetch products by category
    this.props.screenProps.fetchProductsXCategory(this.props.navigation.state.params.category).then((res) => {
      let searchedProductsXCategory = FormatUtil.toGrid(this.props.searchedProductsXCategory);
      this.setState({ listProductsXCategory: searchedProductsXCategory, isLoading: false });
    }).catch(err => {
        console.log(err, "err");
        this.setState({ isLoading: false });
    });

    //Set format products categories
    let searchedProductsList = FormatUtil.toGrid(this.props.screenProps.searchedProducts);
    this.setState({ searchedProductsList: searchedProductsList });
  };

  keyExtractor = (item, index) => item.key;

  renderItem = ({item}) => (
    <TouchableHighlight
      onPress={() => this.props.navigation.navigate('ProductComponent', { category : item.key })}>
      <View style={styles.productItem}>
          {/* <Image style={styles.prodImage} source={item.image} /> */}
          <Image style={styles.prodImage} source={require('../../assets/img/producto1.jpg')} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.prodDescription}>{item.description}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {

  const { params } = this.props.navigation.state;

  return (
    <View style={styles.wrapperAll} >

      <ScrollView style={styles.wrapperProducts} >

        <Header />

        <View>
          <Text>Categoría -> { params.category }</Text>
        </View>
        <TouchableHighlight
        onPress={() => this.props.navigation.goBack()}>
          <View>
            <Text> Volver </Text>
          </View>
        </TouchableHighlight>

        <FlatList
        keyExtractor={ this.keyExtractor }
        numColumns={ 2 }
        data={ this.state.searchedProductsList }
        renderItem={ this.renderItem }/>

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
});

function mapStateToProps(state){
  return {
    searchedProductsXCategory: state.searchedProductsXCategory,
  }
}

export default connect(mapStateToProps)(ProductsXCategoryComponent);