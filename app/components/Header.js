import React, { Component } from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Search from './Search';

class Header extends Component{

	render() {
		return (
      <View>

				<LinearGradient style={styles.wrapperHeader} colors={["#23a7df","#0186be"]} >

		      <View style={styles.iconView}>
		         <Icon name='search' style={styles.iconSearch}></Icon>
		      </View>

					<View style={styles.logo}>
						<Image style={{width: 140, resizeMode: Image.resizeMode.contain}}  source={require('../../assets/img/logo.png')} />
					</View>

		      <View style={styles.displayMeneu}>
		         <Image style={{width: 6, resizeMode: Image.resizeMode.contain}}  source={require('../../assets/img/menu-open.png')} />
		      </View>

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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
