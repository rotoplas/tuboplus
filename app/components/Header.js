import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Search from './Search';

class Header extends Component{
	constructor(props) {
		super(props);
	}

	render() {

		if(this.props.navigation.state.routeName == "MainMenuComponent"){
				btnMenu = <View></View>;
				btnSearch = <View style={styles.iconView}>
			         				<Icon name='search' style={styles.iconSearch}></Icon>
			      			 </View>;
		} else {
				btnMenu = <View>
										<TouchableHighlight
												      onPress={() => this.props.navigation.navigate('MainMenuComponent', { category : "Menú principal" })}>
															<View style={styles.displayMeneu}>
																 <Image style={{width: 6, resizeMode: Image.resizeMode.contain}}  source={require('../../assets/img/menu-open.png')} />
															</View>
								    </TouchableHighlight>
								</View>;
				btnSearch = <View style={styles.iconView}>
												<TouchableHighlight
									        onPress={() => this.props.navigation.goBack()}>
									          <View>
									            <Text> Volver </Text>
									          </View>
									        </TouchableHighlight>
										</View>;
		}

		return (
      <View>

				<LinearGradient style={styles.wrapperHeader} colors={["#23a7df","#0186be"]} >

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
  searchComp: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    marginLeft: 0,
    },
  wrapperHeader: {
    width: '100%',
    flexDirection: 'row',
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
  },
  displayMeneu:{
    width: '15%',
    height: 10,
    paddingTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    },
});


export default Header;
