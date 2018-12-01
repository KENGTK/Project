import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import { 
  StyleSheet,
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
  } from 'react-native';

export default class Form extends Component {
  render(){
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="#76FF03"/>
        <TextInput style={styles.inputBox}
          placeholder="รหัสนักศึกษา"
          placeholderTextColor="#757575">
        </TextInput>
        <TextInput style={styles.inputBox}
          placeholder="รหัสผ่าน"
          secureTextEntry={true}
          placeholderTextColor="#757575">
        </TextInput>
        <TouchableOpacity style={styles.button_Login} onPress={() => Actions.home()}>
          <Text style={styles.button_Text}>
            ลงชื่อเข้าใช้
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_Forget} onPress={() => Actions.regis()}>
          <Text style={styles.Regis_Text}>
            ลงทะเบียน
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    width: 300,
    backgroundColor: '#CCFF90',
    borderRadius: 25,
    fontSize: 16,
    paddingHorizontal: 24,
    color: '#757575',
    marginVertical: 5 
  },
  button_Login: {
    backgroundColor: '#76FF03',
    width: 300,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10
  },
  button_Text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  button_Regis: {
    width: 150,
    marginVertical: 5,
    paddingVertical: 16
  },
  Regis_Text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#757575',
    textAlign: 'center'
  },

  
});