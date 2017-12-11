import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import Slideshow from 'react-native-slideshow';
import { connect } from 'react-redux';

import Header from './Header';
import SelectProductsList from './SelectProductsList';
import FormatUtil from '../lib/format';

class ProductsListXCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      listProductsXCategory: [],
    };
  }

  componentDidMount() {
    this.getProductsListXCategory();
  }

  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/img/icon2.png')}
        style={[styles.iconItem, {tintColor: tintColor}]}
      />
    ),
  });

  getProductsListXCategory = () => {
    this.props.screenProps.fetchProductsXCategory(this.props.navigation.state.params.category).then((res) => {
      let searchedProductsXCategory = FormatUtil.toGrid(this.props.searchedProductsXCategory);
      this.setState({ listProductsXCategory: searchedProductsXCategory , isLoading : false });
    }).catch(err => {
        this.setState({ isLoading : false });
    });
  };

  keyExtractor = (item, index) => item.key;

  renderItem = ({item}) => (
    <View style={styles.productItem}>
        <Image style={styles.prodImage} source={item.url} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.prodDescription}>{item.description}</Text>
    </View>
  );

  render() {

  const { params } = this.props.navigation.state;

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

        <View>
            <Text>Categoría -> {params.category}</Text>
        </View>
        <TouchableHighlight
            onPress={() => this.props.navigation.goBack()}>
          <View>
              <Text> Volver </Text>
          </View>
        </TouchableHighlight>

        { flProducts }

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
    searchedProductsXCategory: state.searchedProductsXCategory,
  }
}

export default connect(mapStateToProps)(ProductsListXCategory);
