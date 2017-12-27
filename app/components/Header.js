import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Search from './Search';
import HideableView from 'react-native-hideable-view';
import { TextField } from 'react-native-material-textfield';

class Header extends Component{

	constructor(props) {
		super(props);
		this.state = {
			text: '',
      		placeholder: 'Buscar',
            visible: false,
        };
        this.onClickedIcon = this.onClickedIcon.bind(this);
        this.onClickedArrow = this.onClickedArrow.bind(this);
	}

	onClickedIcon() {
        this.setState({
            visible: true,
        });
    }
    onClickedArrow() {
        this.setState({
            visible: false
        });
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
								onPress={this.onClickedIcon}>
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
		var searchInput;
		var headerView;

		    if (this.state.visible == true){ 

		      searchInput = 


			        <LinearGradient colors={["#23a7df","#0186be"]} style={styles.wrapperInner} >
				      <TextField style={styles.inputSearch}
				        value={this.state.text}
				        label=''
				        placeholder={this.state.placeholder}
				        onChangeText={ (text) => this.setState({ text })}
				      />

				      <TouchableHighlight style={styles.arrowSearch}
				                onPress={this.onClickedArrow}>
				                 <Image source={require('../../assets/img/searchArrow.png')} />
				      </TouchableHighlight>
				       
				    </LinearGradient>

		        
		    }
		    else{ 
		      headerView = 
		          
		          <LinearGradient style={styles.wrapperHeader} colors={colors} >

					{ btnSearch }

					<View style={styles.logo}>
						<Image style={{width: 140, resizeMode: Image.resizeMode.contain}}  source={require('../../assets/img/logo.png')} />
					</View>

					{ btnMenu }

				</LinearGradient>

		        
		    }

		return (
    <View>

		{ headerView }

		{ searchInput }

    </View>
		);
	}
}


const styles = StyleSheet.create({

  wrapperHeader:{
	flexDirection: 'row',
	zIndex: 200,
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
  wrapperSearch: {
  	width: '100%',
    //position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 201,
  },
   wrapperSearch2: {
  	width: '80%',
    //position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 400,
  },
    wrapperInner: {
  	width: '100%',
    height:105,
  },
  inputSearch: {
    backgroundColor: '#ffffff',
    color: '#666666',
    fontSize: 14,
    height:46,
    width: '94%',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 50,
    paddingRight: 8,
    marginLeft:'3%',
    marginRight:'3%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 5,
  },
  arrowSearch: {
    position: 'absolute',
    top: 45,
    left: 20,
    zIndex: 1,
  }

});


export default Header;
