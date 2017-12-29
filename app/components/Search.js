import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextField } from 'react-native-material-textfield';
import LinearGradient from 'react-native-linear-gradient';


class Search extends Component{

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      placeholder: 'Buscar',
      visible: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
        this.setState({
            visible: false
        });
  }

	render() {
		return (

      <HideableView visible={this.state.visible}>

      <LinearGradient style={styles.wrapperHeader} colors={["#23a7df","#0186be"]} >
      <TextField style={styles.inputSearch}
        value={this.state.text}
        label=''
        placeholder={this.state.placeholder}
        onChangeText={ (text) => this.setState({ text })}
      />

      <TouchableHighlight style={styles.arrowSearch}
                onPress={this.toggle}>
                 <Image source={require('../../assets/img/searchArrow.png')} />
      </TouchableHighlight>

      </LinearGradient>

      </HideableView>

		);
	}
}

const styles = StyleSheet.create({

  wrapperHeader: {
    height:90,
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


export default Search;
