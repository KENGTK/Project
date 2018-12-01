import React, { Component } from 'react';
import {Scene , Router}  from 'react-native-router-flux';
import { 
  StyleSheet,
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  } from 'react-native';

export default class Profile extends Component{
  render (){
    return(
      <View style={styles.container}>
          <Text>
            Profile
          </Text>
      </View>
    );
}}

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff"
  }
});