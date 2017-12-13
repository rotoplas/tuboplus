import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import {
  StackNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';

class MainMenuComponent extends Component{

	constructor(props) {
		super(props);
		this.state = {
			listMenuItems: [
        {key: 'menuItem1', title:'Ventajas de Tuboplus', imageIcon:require('../../assets/img/icon1.png'), colors: ["#0186be","#12a5c7"], componentName: 'CategoriesComponent'},
				{key: 'menuItem2', title:'Catálogo', imageIcon:require('../../assets/img/icon2.png'), colors: ["#24bee2","#019bbe"], componentName: 'CategoriesComponent'},
				{key: 'menuItem3', title:'Proceso de termofusión', imageIcon:require('../../assets/img/icon3.png'), colors: ["#23a6dd","#0184bb"], componentName: 'CategoriesComponent'},
				{key: 'menuItem4', title:'Correspondencias', imageIcon:require('../../assets/img/icon4.png'), colors: ["#1881c1","#016aaa"], componentName: 'EquivalenceComponent'},
				{key: 'menuItem5', title:'Vida Útil', imageIcon:require('../../assets/img/icon5.png'), colors: ["#005991","#00385c"], componentName: 'CategoriesComponent'},
				{key: 'menuItem6', title:'Localiza a un distribuidor', imageIcon:require('../../assets/img/icon6.png'), colors: ["#003455","#00243a"], componentName: 'ContactformComponent'},
				{key: 'menuItem7', title:'Contáctenos', text: 'Lorem ipsum', imageIcon:require('../../assets/img/icon7.png'), colors: ["#001e31","#00111b"], componentName: 'ContactComponent'}
			],
		};
	}

	static navigationOptions = {};

  componentDidMount() {}

	renderItem = ({item}) => (
				<TouchableHighlight
		      onPress={() => this.props.navigation.navigate(item.componentName, { category : item.title })}>
					<LinearGradient colors={item.colors} style={styles.linearGradient} key={item.key}>
							<Image style={styles.iconItem} source={item.imageIcon}/>
						 <View style={styles.textItem}>
							 <Text style={styles.menuTit}>{item.title}</Text>
						 </View>
				 </LinearGradient>
		    </TouchableHighlight>
  );

	render() {
		return (
      <View style={styles.wrapperMenu}>

      <Header />

			<FlatList data={this.state.listMenuItems}
			  renderItem={this.renderItem}
			/>
      </View>
		);
	}
}

const styles = StyleSheet.create({
   linearGradient: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    paddingTop: "5.65%",
    paddingLeft: "14%",
    paddingBottom: "5.65%",
    flexDirection: 'row',
  },
  iconItem:{
    backgroundColor: 'transparent',
    width: '15%',
    height: 45,
    },
  textItem: {
      justifyContent: 'space-between',
      width: '85%',
    },
  menuTit:{
  	color:'#ffffff',
  	fontSize:16,
  	width: '100%',
    fontFamily: 'Signika-Bold',
    backgroundColor: 'transparent',
    marginTop: 10,
    paddingLeft: 20,
  },
});

function mapStateToProps(state){
  return {}
}

export default connect(mapStateToProps)(MainMenuComponent);
