import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableHighlight} from 'react-native';
import Slideshow from 'react-native-slideshow';
import { connect } from 'react-redux';


import Header from './Header';
import SelectProductsList from './SelectProductsList';
import FormatUtil from '../lib/format';
import MenuBottomComponent from './MenuBottomComponent';

class CategoriesComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      categoryPayload: [],
      slides: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'http://placeimg.com/640/480/any',
        },
      ],
    };
  }

  componentDidMount() {
    this.initialFetch();
    console.log(`componentDidMount -> ${JSON.stringify(this.props.screenProps.searchedCategories)}`);
  }

  initialFetch = () => {
    this.props.screenProps.fetchCategories().then((res) => {
      let categoryPayload = FormatUtil.toCategoryPayload(this.props.searchedCategories);
      this.setState({ categoryPayload: categoryPayload , isLoading : false });
        //console.log(`categoryPayload -> ${JSON.stringify(this.state.categoryPayload)}`);
    }).catch(err => {
        //console.log(`err -> ${err}`);
        this.setState({ isLoading : false });
    });
  };

  static navigationOptions = {};

  keyExtractor = (item, index) => item.key;

  renderItem = ({item}) => (
    <TouchableHighlight
      onPress={() => this.props.navigation.navigate('CategoriesComponent', { category : item.key })}>
        <View style={styles.productItem}>
            <Image style={styles.prodImage} source={item.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.prodDescription}>{item.description}</Text>
        </View>
    </TouchableHighlight>
  );

  render() {

    if(this.state.isLoading){
      view = <Text> Cargando... </Text>;
    } else {
      view = (<View>
                <Header />
                <Slideshow dataSource={this.state.categoryPayload.slides}/>

                <View style={styles.filterBy} >
                    <SelectProductsList options={this.state.categoryPayload.filters}/>
                </View>

                <FlatList
                      keyExtractor={this.keyExtractor}
                      numColumns={2}
                      data={this.state.categoryPayload.categories}
                      renderItem={this.renderItem}/>
            </View>);
   }

  return (
    <View style={styles.wrapperAll} >

      <ScrollView style={styles.wrapperProducts}>

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
});

function mapStateToProps(state){
  return {
    searchedProducts: state.searchedProducts,
  }
}

export default connect(mapStateToProps)(CategoriesComponent);
