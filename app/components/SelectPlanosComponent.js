import React, { Component } from 'react';
import { Select, Option} from 'react-native-chooser';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class SelectPlanosComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { selected : this.props.options[0].value }
  }

  onSelect(value, label) {
    this.setState({value : value, selected : label});
  }

  render() {
    return (
      <View style={styles.container}>
        <Select
            onSelect = {this.onSelect.bind(this)}
            defaultText  = {this.state.selected}
            style = {{borderColor : 'transparent', backgroundColor : 'transparent', width: '100%'}}
            textStyle = {{color: '#999999'}}
            animationType = {'fade'}
            transparent = {true}
            backdropStyle = {{backgroundColor : 'rgba(0,0,0,0.5)'}}
            indicatorIcon = {<View style={styles.selectIconContainer}><Icon style={styles.selectIcon} name='angle-down'></Icon></View>}
            optionListStyle = {{backgroundColor : '#ffffff', borderColor:'#999999', height:300, }}>
          {this.props.options.map((item) => (
            <Option key={item.key} value={item.key}>{item.value}</Option>
          ))}
        </Select>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerSelect: {
    flex: 1,
  },
  selectIconContainer:{
    backgroundColor: 'transparent',
    width: 30,
    right: 10,
  },
  selectIcon: {
    fontSize: 20,
    color: '#999999',
    width: '100%',
  }
});

export default SelectPlanosComponent;
