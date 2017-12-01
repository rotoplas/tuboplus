import React, { Component } from 'react';
import { Select, Option} from 'react-native-chooser';
import Icon from 'react-native-vector-icons/FontAwesome';
 
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
 
export default class SelectPlanos extends Component {
 
  constructor(props) {
    super(props);
    this.state = {value : '200081'}
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
            style = {{borderColor : 'transparent', backgroundColor : '#ffffff'}}
            animationType = {'fade'}
            transparent = {true}
            textStyle = {{}}
            backdropStyle = {{backgroundColor : 'rgba(0,0,0,0.5)'}}
            indicatorIcon = {<View style={styles.selectIconContainer}><Icon style={styles.selectIcon} name='angle-down'></Icon></View>}
            optionListStyle = {{backgroundColor : '#ffffff'}}
          >
          <Option value = '200081'>200081</Option>
          <Option value = '200082'>200082</Option>
          <Option value = '200083'>200083</Option>
          <Option value = '200084'>200084</Option>
          <Option value = '200085'>200085</Option>
          <Option value = '200086'>200086</Option>
          <Option value = '200087'>200087</Option>
          <Option value = '200088'>200088</Option>
          <Option value = '200089'>200089</Option>
 
        </Select>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
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

