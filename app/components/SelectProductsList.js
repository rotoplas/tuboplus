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
    this.state = {value : 'Filtrar por...'}
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
            style = {{borderColor : 'transparent', backgroundColor : 'transparent', width: '100%'}}
            textStyle = {{color: '#999999'}}
            animationType = {'fade'}
            transparent = {true}
            backdropStyle = {{backgroundColor : 'rgba(0,0,0,0.5)'}}
            indicatorIcon = {<View style={styles.selectIconContainer}><Icon style={styles.selectIcon} name='angle-down'></Icon></View>}
            optionListStyle = {{backgroundColor : '#ffffff', borderColor:'#999999' }}
          >
          <Option value = 'Product 1'>Product 1</Option>
          <Option value = 'Product 2'>Product 2</Option>
          <Option value = 'Product 3'>Product 3</Option>
          <Option value = 'Product 4'>Product 4</Option>
          <Option value = 'Product 5'>Product 5</Option>
          <Option value = 'Product 6'>Product 6</Option>
          <Option value = 'Product 7'>Product 7</Option>
          <Option value = 'Product 8'>Product 8</Option>
          <Option value = 'Product 9'>Product 9</Option>

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
}

});
