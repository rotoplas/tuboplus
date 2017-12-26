import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Search from './Search';


class Header extends Component{

	constructor(props) {
		super(props);
		this.navigateTo = this.navigateTo.bind(this);
	}

	componentDidMount() {}

	navigateTo = () => {

		this.props.navigation.navigate('MainMenuComponent', { category : "Menú principal" });
	}

	render() {
		let colors = ["#82e7ff","#5dc1d9"]; 
		if(this.props.navigation.state.routeName == "MainMenuComponent"){
				btnMenu = <View></View>;
				btnSearch = <TouchableHighlight style={styles.iconView}
								onPress={() => this.props.navigation.SearchComponent()}>
			         				<Icon name='search' style={styles.iconSearch}></Icon>
			      			 </TouchableHighlight>;
		} else {
				colors = ["#254067","#011d44"]; 
				btnMenu = 

				<View style={styles.displayMeneu}>
					<TouchableHighlight
					      onPress={() => this.navigateTo()}>
							<Image style={{width: 6, resizeMode: Image.resizeMode.contain}}  source={require('../../assets/img/menu-open.png')} />
				    </TouchableHighlight>
				</View>;

				btnSearch = 

				<View style={styles.iconView} style={styles.iconView}>
					<TouchableHighlight
				        onPress={() => this.props.navigation.goBack()}>
				            <Icon name='arrow-left' style={styles.iconSearch}></Icon>
				    </TouchableHighlight>
				</View>;
		}

		return (
      <View>

				<LinearGradient style={styles.wrapperHeader} colors={colors} >

					{ btnSearch }

					<View style={styles.logo}>
						<Image style={{width: 140, resizeMode: Image.resizeMode.contain}}  source={require('../../assets/img/logo.png')} />
					</View>

					{ btnMenu }

				</LinearGradient>

    </View>
		);
	}
}


const styles = StyleSheet.create({

  wrapperHeader:{
	flexDirection: 'row'	
	},
  searchComp: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    marginLeft: 0,
    },
  iconView:{
    width: '15%',
    height: 10,
    paddingTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    },
  iconSearch: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 24,
  },
  logo:{
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  displayMeneu:{
    width: '15%',
    height: 10,
    paddingTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    },
});


export default Header;
