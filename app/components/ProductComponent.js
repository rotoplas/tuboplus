import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import { Select, Option} from 'react-native-chooser';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from './Header';
import AccordionProductComponent from './AccordionProductComponent';
import MenuBottomComponent from './MenuBottomComponent';
import FormatUtil from '../lib/format';
import Table1 from './Table1';
import Table2 from './Table2';
import SelectPlanosComponent from './SelectPlanosComponent';

class ProductComponent extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      productPayload: [],
      selected : null,
      options: [],
      dataTable: []
    };
  }


  componentDidMount() {
    this.initialFetch();
  }

  initialFetch = () => {
    //Fetch product by category and ID
    this.props.screenProps.fetchProduct(this.props.navigation.state.params.category, this.props.navigation.state.params.product).then((res) => {
      let productPayload = FormatUtil.toProductPayload(this.props.searchedProduct);
      let options = FormatUtil.toFilter(this.props.searchedProduct[0].codigos);
      let dataTable = productPayload.codes[0].values;
      this.setState({
        productPayload : productPayload,
        isLoading : false,
        selected : this.props.searchedProduct[0].codigos[0].id,
        options : options,
        dataTable : dataTable
      });
    }).catch(err => {
        console.log(`err -> ${err}`);
        this.setState({ isLoading : false });
    });
  };

  onSelect(value, label) {
    let ndataTable = this.state.productPayload.codes.filter(data => data.key == value);
    this.setState({dataTable : ndataTable[0].values, selected : label});
  }

  static navigationOptions = {};

  render() {
    if(this.state.isLoading){
      view = <Text style={styles.cargando}> Cargando... </Text>;
    } else {
      const sections = [
          {
            title: 'Correspondencias',
            content:
              <View style={styles.content}>
                <Text style={styles.titleTable}>Equivalencias</Text>
                <Table1 dataTable={this.state.productPayload.equivalence}
                  titleLeft="Milímetros (mm)"
                  titleRight="Pulgadas (”)"/>
              </View>
          },{
            title: 'Planos',
            content:
            <View style={styles.contentPlano}>
              <Image
                style={{width: '100%', height:250, resizeMode: Image.resizeMode.contain}}
                source={{uri: this.state.productPayload.plane}} />

              <Table2 dataTable={this.state.dataTable}/>
            </View>
          }
      ];
      view = (<View>
                <View style={styles.titlesContainer}>
                  <Text style={styles.mainTitle}>{ this.state.productPayload.title }</Text>
                  <View style={styles.categoryContainer}>
                    <Text style={styles.titleCat}>Categoría: </Text>
                    <Text style={styles.category}>{ this.state.productPayload.category }</Text>
                  </View>
                </View>

                <View style={styles.imgContent}>
                  <Image style={styles.imgProd}  source={{uri: this.state.productPayload.image}} />
                </View>

                {/*<Text style={styles.introContainer}>{ this.state.productPayload.description }</Text>*/}

                <AccordionProductComponent sections={sections} activeItem={-1}/>
            </View>);
    }

    const { params } = this.props.navigation.state;

    return (

      <View style={styles.container}>

      <ScrollView style={styles.containerScroll}
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
  imgContent: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
  },
  iconItem:{
    width: 35,
    height: 30,
    backgroundColor: 'transparent',
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
  titleTable: {
      fontSize: 18,
      color: '#0075bc',
      fontFamily: 'Signika-Regular',
      marginLeft: 20,
      marginBottom: 20,
  },
  containerSelect: {
    height: 40
  },
  selectIconContainer:{
    backgroundColor: 'transparent',
    width: 30,
    right: 10,
  },
  selectIcon: {
    fontSize: 20,
    color: '#999999',
    width: '100%',
  },
  containerScroll: {
    height : '100%',
  },
  space:{
    paddingBottom: 80,
  },
  filterBy:{
      backgroundColor: '#ffffff',
      height:44,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      marginTop:20,
      marginBottom:20,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:10,
      borderRadius: 4,
      width: '94%',
      marginLeft:'2%',
      marginRight:'2%',
      },
      cargando:{
      flex: 1,
      backgroundColor: 'transparent',
    },
});

function mapStateToProps(state){
  return {
    searchedProduct: state.searchedProduct,
  }
}

export default connect(mapStateToProps)(ProductComponent);
