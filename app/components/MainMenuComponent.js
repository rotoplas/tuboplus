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
    this.navigateTo = this.navigateTo.bind(this);
		this.state = {
			listMenuItems: [
        {key: '1', title:'Ventajas de Tuboplus', imageIcon:require('../../assets/img/icon1.png'), colors: ["#24b9dc","#0196b9"], componentName: 'BenefitsComponent'},
				{key: '2', title:'Catálogo', imageIcon:require('../../assets/img/icon2.png'), colors: ["#24a5db","#0182b9"], componentName: 'CategoriesComponent'},
				{key: '3', title:'Proceso de termofusión', imageIcon:require('../../assets/img/icon3.png'), colors: ["#22a3da","#0183b9"], componentName: 'TermofusionComponent'},
				{key: '4', title:'Correspondencias', imageIcon:require('../../assets/img/icon4.png'), colors: ["#3e7bc0","#2663a9"], componentName: 'EquivalenceComponent'},
				{key: '5', title:'Vida Útil', imageIcon:require('../../assets/img/icon5.png'), colors: ["#165585","#0e3553"], componentName: 'TimeLifeComponent'},
				{key: '6', title:'Localiza a un distribuidor', imageIcon:require('../../assets/img/icon6.png'), colors: ["#00204d","#001431"], componentName: 'ContactformComponent'},
				{key: '7', title:'Contáctenos', text: 'Lorem ipsum', imageIcon:require('../../assets/img/icon7.png'), colors: ["#0f0f22","#000917"], componentName: 'ContactComponent'}
			],
		};
	}

	static navigationOptions = {};

  componentDidMount() {}

  navigateTo(item){
    this.props.navigation.navigate(item.componentName, { category : item.title })
  }

	renderItem = ({item}) => (
				<TouchableHighlight
		      onPress={() => this.navigateTo(item)}>
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

      <Header {...this.props}/>

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
    paddingTop: "4.8%",
    paddingLeft: "14%",
    paddingBottom: "4.8%",
    flexDirection: 'row',
  },
  iconItem:{
    backgroundColor: 'transparent',
    width: '15%',
    height: 45,
    width:55,
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
