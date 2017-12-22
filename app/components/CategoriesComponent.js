import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableHighlight, NetInfo} from 'react-native';
import Slideshow from 'react-native-slideshow';
import { connect } from 'react-redux';
import { Select, Option} from 'react-native-chooser';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      placeholder : 'Filtrar por...' ,
      selected : null,
      status: false
    };
  }

  componentDidMount() {
    NetInfo.addEventListener('connectionChange', this.handleConnectionChange);

    NetInfo.getConnectionInfo().then((connectionInfo) => {
      this.setState({ status: connectionInfo.type === "none" || connectionInfo.type === "unknown" ? false : true });
      if(this.state.status){
        this.initialFetch();
      } else {
        this.setState({ isLoading: false });
      }
    });
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleConnectionChange);
  }

  handleConnectionChange = ( connectionInfo ) => {
    this.setState({ status: connectionInfo.type === "none" || connectionInfo.type === "unknown" ? false : true });
    if(this.state.status){
      this.initialFetch();
    } else {
      this.setState({ isLoading : false, status : false });
    }
  }

  initialFetch = () => {
    this.props.screenProps.fetchCategories().then((res) => {
      let categoryPayload = FormatUtil.toCategoryPayload(this.props.searchedCategories);
      if(categoryPayload.slides.length === 0 && categoryPayload.filters.length === 0 && categoryPayload.categories.length === 0){
        this.setState({ categoryPayload: categoryPayload , isLoading : false, status : false });
      } else {
        this.setState({ categoryPayload: categoryPayload , isLoading : false});
      }
    }).catch(err => {
        console.log(`err -> ${err}`);
        this.setState({ isLoading : false, status : false });
    });
  };

  static navigationOptions = {};

  keyExtractor = (item, index) => item.key;

  renderItem = ({item}) => (
    <TouchableHighlight
      onPress={() => this.props.navigation.navigate('ProductsXCategoryComponent', { category : item.key, name : item.name })}>
        <View style={styles.productItem}>
            <Image style={styles.prodImage} source={item.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.prodDescription}>{item.description}</Text>
        </View>
    </TouchableHighlight>
  );

  onSelect(value, label) {
    this.props.navigation.navigate('ProductsXCategoryComponent', { category : value, name : label });
  }

  render() {
    if(this.state.status){
        if(this.state.isLoading){
          view = <Text> Cargando... </Text>;
        } else {
          view = (<View>
                    <Slideshow dataSource={this.state.categoryPayload.slides}/>
                    <View style={styles.filterBy} >
                        <View style={styles.container}>
                          <Select
                              onSelect = {this.onSelect.bind(this)}
                              defaultText  = {this.state.placeholder}
                              style = {{borderColor : 'transparent', backgroundColor : 'transparent', width: '100%'}}
                              textStyle = {{color: '#999999'}}
                              animationType = {'fade'}
                              transparent = {true}
                              backdropStyle = {{backgroundColor : 'rgba(0,0,0,0.5)'}}
                              indicatorIcon = {<View style={styles.selectIconContainer}><Icon style={styles.selectIcon} name='angle-down'></Icon></View>}
                              optionListStyle = {{backgroundColor : '#ffffff', borderColor:'#999999' }}>
                            {this.state.categoryPayload.filters.map((item) => (
                              <Option key={item.key} value={item.key}>{item.value}</Option>
                            ))}
                          </Select>
                        </View>
                    </View>
                    <FlatList
                          keyExtractor={this.keyExtractor}
                          numColumns={2}
                          data={this.state.categoryPayload.categories}
                          renderItem={this.renderItem}/>
                </View>);
       }
    } else {
      view = <Text> No tienes conexión a internet. </Text>;
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
    containerSelect: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    selectIconContainer:{
      backgroundColor: 'transparent',
      width: 30,
      right: 0,
      },
    selectIcon: {
      fontSize: 20,
      color: '#999999',
      width: '100%',
    },
});

function mapStateToProps(state){
  return {
    searchedCategories: state.searchedCategories
  }
}

export default connect(mapStateToProps)(CategoriesComponent);
