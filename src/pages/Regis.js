import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Regis extends React.Component{
  render() {
    let data = [
        {value:'ผู้กู้ยืมรายใหม่'},
        {value:'ผู้กู้ยืมรายเก่า'},
        {value:'ผู้กู้ยืมรายเก่าเลื่อนชั้นปี'},
    ];

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.Tab}>
          <Text style={styles.text}>
              ลงทะเบียน
          </Text>
        </TouchableOpacity>
        
        <Text style={styles.textID}>
            รหัสนักศึกษา
        </Text>
        <TextInput style={styles.inputBox}
          placeholder="ใส่รหัสนักศึกษา">
        </TextInput>

         <Text style={styles.textPass}>
          รหัสผ่าน
        </Text>
        <TextInput style={styles.inputBox}
          placeholder="ใส่รหัสผ่าน">
        </TextInput>

         <Text style={styles.textID}>
            ยืนยันรหัสผ่าน
        </Text>
        <TextInput style={styles.inputBox}
          placeholder="ใส่รหัสผ่านอีกครั้ง">
        </TextInput>

        

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ยืนยัน</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#ffffff',
   flex:1,
   alignItems: 'center',
   justifyContent: 'center'
  },
  
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    fontWeight: '500',
    textAlign: 'center',
    bottom: 7
  },

  textID : {
    fontSize: 16,
    fontWeight: 'bold',
    fontWeight: '500',
    right: 100,
    bottom: 10
  },
  
  textPass : {
    fontSize: 16,
    fontWeight: 'bold',
    fontWeight: '500',
    right: 120,
    bottom: 10
  },

  inputBox: {
    width: 300,
    backgroundColor: '#ccff90',
    borderRadius: 25,
    paddingHorizontal: 24,
    color:'#757575',
    fontSize: 16,
    bottom: 20,
    margin: 12
  },

  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color:'#757575'
  },

  button: {
    width: 150,
    borderRadius: 25,
    marginVertical: 10,
    backgroundColor: '#76ff03',
    paddingVertical: 10,
    bottom:30
  },

  Tab: {
    width: 500,
    height: 40,
    backgroundColor: '#76ff03',
    paddingVertical: 10,
    bottom:95
  }
});
