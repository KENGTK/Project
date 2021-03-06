import React, { Component } from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Image,
  } from 'react-native';

export default class Logo extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image  style={{width: 100 , height: 175}}
          source={require('../images/Logo.png')}/>
        <Text style={styles.LogoText}>
          RMUTL Studentloan
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  LogoText: {
    marginVertical: 15,
    fontSize: 24,
    color: '#757575'
  },
});