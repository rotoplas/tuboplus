import React, { Component } from 'react';
import { Select, Option} from 'react-native-chooser';
import Icon from 'react-native-vector-icons/FontAwesome';
 
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
 
export default class SelectImput extends Component {
 
  constructor(props) {
    super(props);
    this.state = {value : 'Select Me Please'}
  }
  onSelect(value, label) {
    this.setState({value : value});
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Select
            onSelect = {this.onSelect.bind(this)}
            defaultText  = {this.state.value}
            style = {{borderWidth : 1, borderColor : '#cccccc'}}
            textStyle = {{}}
            backdropStyle = {{backgroundColor : 'rgba(0,0,0,0.5)'}}
            indicatorIcon = {<View style={styles.selectIconContainer}><Icon style={styles.selectIcon} name='angle-down'></Icon></View>}
            optionListStyle = {{backgroundColor : '#ffffff'}}
          >
          <Option value = 'Azhar'>Azhar</Option>
          <Option value = 'johnceena'>Johnceena</Option>
          <Option value = 'undertaker'>Undertaker</Option>
          <Option value = 'Daniel'>Daniel</Option>
          <Option value = 'Roman'>Roman</Option>
          <Option value = 'Stonecold'>Stonecold</Option>
          <Option value = 'Rock'>Rock</Option>
          <Option value = 'Sheild'>Sheild</Option>
          <Option value = 'Orton'>Orton</Option>
 
        </Select>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
  },
selectIconContainer:{
  backgroundColor: 'transparent',
  width: 30,
  right: 10,
  },
selectIcon: {
  fontSize: 20,
}

});

