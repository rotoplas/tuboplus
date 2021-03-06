import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Search from './Search';
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
        this.navigateGoHome = this.navigateGoHome.bind(this);
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

  navigateGoHome = () => {
    this.props.navigation.navigate('MainMenuComponent', { category : "Menú principal" });
  }

	navigateTo = () => {
		this.props.navigation.navigate('MainMenuComponent', { category : "Menú principal" });
	}

	onClickedSearchProduct = () => {
		this.props.navigation.navigate('ProductsXSearchedComponent', { productName : this.state.text });
	}

	render() {
		let colors = ["#82e7ff","#24b9dc"];
		if(this.props.navigation.state.routeName == "MainMenuComponent"){
				btnMenu = <View></View>;
				btnSearch = <TouchableHighlight underlayColor={'transparent'} style={styles.iconSearch1}
								onPress={this.onClickedIcon}>
			         				<Icon name='search' style={styles.iconSearch} size={30}></Icon>
			      			 </TouchableHighlight>;

		} else if(this.props.navigation.state.routeName == "BenefitsComponent"){
      colors = ["#82e7ff","#5dc1d9"];

      btnMenu =(<View style={styles.displayMeneu}>
									<TouchableHighlight underlayColor={'transparent'}
												onPress={() => this.navigateTo()}>
											<Image style={{width: 6, resizeMode: Image.resizeMode.contain}}  source={require('../../assets/img/menu-open.png')} />
										</TouchableHighlight>
								</View>);

        btnSearch = (<View style={styles.iconView} style={styles.iconView}>
							          <TouchableHighlight underlayColor={'transparent'}
							                onPress={() => this.props.navigation.goBack()}>
							                    <Icon name='arrow-left' style={styles.iconSearch} size={30}></Icon>
							            </TouchableHighlight>
							        </View>);

    } else {

				colors = ["#254067","#011d44"];
        btnMenu = (<View style={styles.displayMeneu}>
						          <TouchableHighlight underlayColor={'transparent'}
						                onPress={() => this.navigateTo()}>
						              <Image style={{width: 6, resizeMode: Image.resizeMode.contain}}  source={require('../../assets/img/menu-open.png')} />
						            </TouchableHighlight>
						        </View>);

        btnSearch = (<View style={styles.iconView}>
							          <TouchableHighlight underlayColor={'transparent'}
							                onPress={() => this.props.navigation.goBack()}>
							                <Icon name='arrow-left' style={styles.iconSearch} size={30}></Icon>
							            </TouchableHighlight>
							        </View>);
		}

		var searchInput;
		var headerView;
		    if (this.state.visible){
		      searchInput = (<View>
														<LinearGradient colors={["#23a7df","#0186be"]} style={styles.wrapperInner} >
													      <TextField style={styles.inputSearch}
													        value={this.state.text}
													        label=''
													        placeholder={this.state.placeholder}
																	onChangeText={(text) => this.setState({text})}/>

													      <TouchableHighlight
																underlayColor={'transparent'}
																style={styles.arrowSearch}
													                onPress={this.onClickedArrow}>
													                 <Image source={require('../../assets/img/searchArrow.png')} />
													      </TouchableHighlight>

																<TouchableHighlight
																underlayColor={'transparent'}
																style={styles.butSearch}
																				 onPress={() => this.onClickedSearchProduct()}>
																					<Icon name='search' style={styles.iconSearch} size={30}></Icon>
															 </TouchableHighlight>
														</LinearGradient>
													</View>);
		    } else {
		      headerView =
					<LinearGradient style={styles.wrapperHeader} colors={colors} >

						{ btnSearch }

						<View style={styles.logo}>
	            <TouchableHighlight underlayColor={'transparent'}
	                        onPress={this.navigateGoHome}>
							  <Image style={{width: 140, resizeMode: Image.resizeMode.contain}}  source={require('../../assets/img/logo.png')} />
	            </TouchableHighlight>
						</View>

						{ btnMenu }

					</LinearGradient>;
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
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    },
  iconSearch: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 24,
  },
  iconSearch1:{
    width: '15%',
    height: 10,
    paddingTop: 95,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderRadius: 4,
  },
  arrowSearch: {
    position: 'absolute',
    top: 45,
    left: 20,
    zIndex: 1,
  },
  butSearch:{
    position: 'absolute',
    backgroundColor: '#82e7ff',
    padding: 11,
    right: 9,
    top: 34,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },

});


export default Header;
