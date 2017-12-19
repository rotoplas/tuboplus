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
      view = <Text> Cargando... </Text>;
    } else {
      const sections = [
          {
            title: 'Correspondencias',
            content:
              <View style={styles.content}>
                <Text style={styles.titleTable}>Equivalencias</Text>
                <Table1 dataTable={this.state.productPayload.equivalence}
                  titleLeft="Medidas"
                  titleRight="Tabla de"/>
              </View>
          },{
            title: 'Planos',
            content:
            <View style={styles.contentPlano}>
              <Image
                style={{width: '100%', height:250, resizeMode: Image.resizeMode.contain}}
                source={this.state.productPayload.image} />
              <View style={styles.selectPlanos}>
                <View style={styles.containerSelect}>
                  <Select
                      onSelect = {this.onSelect.bind(this)}
                      defaultText  = {this.state.selected}
                      style = {{borderColor : 'transparent', backgroundColor : 'transparent', width: '100%'}}
                      textStyle = {{color: '#999999'}}
                      animationType = {'fade'}
                      transparent = {true}
                      backdropStyle = {{backgroundColor : 'rgba(0,0,0,0.5)'}}
                      indicatorIcon = {<View style={styles.selectIconContainer}><Icon style={styles.selectIcon} name='angle-down'></Icon></View>}
                      optionListStyle = {{backgroundColor : '#ffffff', borderColor:'#999999' }}>
                    {this.state.options.map((item) => (
                      <Option key={item.key} value={item.key}>{item.value}</Option>
                    ))}
                  </Select>
                </View>
              </View>
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
                  <Image style={styles.imgProd}  source={ this.state.productPayload.image } />
                </View>

                <Text style={styles.introContainer}>{ this.state.productPayload.description }</Text>

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

        <View>
          <Text>Producto -> { params.product }</Text>
        </View>

        <TouchableHighlight
        onPress={() => this.props.navigation.goBack()}>
          <View>
            <Text> Volver </Text>
          </View>
        </TouchableHighlight>

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
});

function mapStateToProps(state){
  return {
    searchedProduct: state.searchedProduct,
  }
}

export default connect(mapStateToProps)(ProductComponent);
