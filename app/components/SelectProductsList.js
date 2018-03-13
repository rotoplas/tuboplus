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
    this.state = { placeholder : 'Filtrar por...' , selected : null}
  }
  onSelect(value, label) {
    this.setState({selected : value, placeholder : label});
  }

  render() {
    return (
      <View style={styles.container}>
        <Select
            onSelect = {this.onSelect.bind(this)}
            defaultText  = {this.state.placeholder}
            style = {{borderColor : 'transparent', backgroundColor : 'transparent', width: '100%'}}
            textStyle = {{color: '#999999'}}
            animationType = {'fade'}
            transparent = {true}
            backdropStyle = {{backgroundColor : 'rgba(0,0,0,0.5)'}}
            indicatorIcon = {<View style={styles.selectIconContainer}><Icon style={styles.selectIcon} name='angle-down'></Icon></View>}
            optionListStyle = {{backgroundColor : '#ffffff', borderColor:'#999999'}}>
          {this.props.options.map((item) => (
            <Option key={item.key} value={item.key}>{item.value}</Option>
          ))}
        </Select>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'transparent',
  },
  selectIconContainer:{
    backgroundColor: 'transparent',
    width: 30,
    right: 0,
    },
  selectIcon: {
    fontSize: 20,
    color: '#999999',
    width: '100%',
  },

});
