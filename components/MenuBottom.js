import React, { Component } from 'react';
import { FlatList, View, Text, Image, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class MenuBottom extends Component{

	render() {
		return (

      <View style={styles.menuBottom}>

			<FlatList horizontal={true} data={[
				{key: 'menuItem1', imageIcon:require('../assets/img/icon2.png'), stylesButtons: styles.inactiveItem}, 
				{key: 'menuItem2', imageIcon:require('../assets/img/icon3.png'), stylesButtons: styles.activeItem},
				{key: 'menuItem3', imageIcon:require('../assets/img/icon4.png'), stylesButtons: styles.inactiveItem},
        {key: 'menuItem4', imageIcon:require('../assets/img/icon6.png'), stylesButtons: styles.inactiveItem},
				{key: 'menuItem5', imageIcon:require('../assets/img/icon7.png'), stylesButtons: styles.inactiveItem}]}
        
			  renderItem={({item}) => 


      <LinearGradient colors={["#1a83c3","#0069a9"]}>

          <TouchableHighlight key={item.key} 
          style={item.stylesButtons}>
            
            <View style={styles.iconItemContenainer}>
              <Image style={styles.iconItem} source={item.imageIcon}/>
            </View>
            
          </TouchableHighlight>
      </LinearGradient>
			}
			/>
      </View>
		);
	}	
}



const styles = StyleSheet.create({

  menuBottom:{ 
    backgroundColor: 'transparent',
    flex: 1,  
    position: 'absolute', left:0 , bottom: 0,
  	},
  inactiveItem:{
    paddingTop:12, 
    paddingBottom:12, 
    paddingLeft:23.5, 
    paddingRight:23.5, 
    borderRightColor: '#ffffff',
    borderRightWidth: 1,
    backgroundColor: 'transparent',
    },
  activeItem:{
    paddingTop:12, 
    paddingBottom:12, 
    paddingLeft:23.5, 
    paddingRight:23.5, 
    backgroundColor: '#013178',
    borderRightColor: '#ffffff',
    borderRightWidth: 1,
    },
  iconItemContenainer:{
    backgroundColor: 'transparent',
    justifyContent: 'center',
    },
  iconItem:{
    width: 35,
    height: 30,
    backgroundColor: 'transparent',
    },
});


export default MenuBottom;
