import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  StatusBar,
  Text
  } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Logo/>
          <Form type="login"/>
        </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container:{
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: "#ffffff"
  }

});
