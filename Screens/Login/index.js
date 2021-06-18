

import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View, Button, TextInput, Image, Dimensions, Keyboard, SafeAreaView, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';
import Common from '../Common'
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  
  React.useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
  const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");
  React.useEffect(() => {
    Initialcheck()
  }, [])
  const Initialcheck = async () => {
    try {
      const username = await AsyncStorage.getItem('NAME');
      const Pass = await AsyncStorage.getItem('PASSWORD');

      if (username !== null && Pass !== null) {
        // We have username!!
        setName(username);
        setPass(Pass);
        setRemember(username ? true : false);
      }
    } catch (error) {
      console.log('not remembered');
    }
  }
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [flag, setFlag] = useState(true);
  const [remember, setRemember] = useState(false)

  const SignIn = () => {
    if (name == '') {
      alert('enter valid name')
    } else {
      if (pass == '') {
        alert('enter valid Password')
      }
      else {
        navigation.navigate('Home');
        setName('');
        setPass('');
      }
    }
  }

  const remeberUser = async () => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('PASSWORD', pass);
    console.log('up')
  }
  const forgotUser = async () => {
    await AsyncStorage.removeItem('NAME');
    await AsyncStorage.removeItem('PASSWORD');
    console.log('down')
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={'padding'}
      keyboardVerticalOffset={65}>

      <Common />
      <View style={styles.main}>
        {keyboardStatus != 'Keyboard Shown' && <Text style={styles.txt}>Sign in to your Account</Text>}
        <TextInput
          placeholder='Username'
          value={name}
          onChangeText={text => setName(text)}
          style={styles.txtinp}
        />
        <View style={{ width: 320, height: 70, borderBottomColor: 'black', borderBottomWidth: 1, alignSelf: 'center', flexDirection: 'row', alignSelf: 'center', }}>
          <TextInput
            placeholder='Password'
            secureTextEntry={flag}
            value={pass}
            onChangeText={text => setPass(text)}
            style={styles.txtinp1}
          />
          <Feather name={flag ? 'eye-off' : 'eye'} color={flag ? 'black' : 'grey'} size={25} onPress={() => setFlag(!flag)} style={{ marginTop: 30 }} />
        </View>
        <View style={styles.view1}>
          <View style={{ flexDirection: 'row' }}>
            <CheckBox
              disabled={false}
              value={remember}
              onValueChange={(newValue) => {
                setRemember(newValue);
                if (remember == true) {
                  forgotUser();
                } else {
                  remeberUser();
                }
              }}
            />
            <Text style={{ marginTop: 5 }}>Remember me</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}><Text style={styles.txt1}>Forgot Password?</Text></TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => SignIn()} >
            <Text style={styles.txt2}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  txtinp: {
    width: 320, height: 50, fontSize: 18, borderBottomColor: 'grey', borderBottomWidth: 1, alignSelf: 'center', marginTop: 30
  }, txtinp1: {
    width: 300, height: 50, fontSize: 18, borderBottomColor: 'grey', alignSelf: 'center', marginTop: 30
  },
  view1: {
    flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', marginHorizontal: 40
  },
  button: {
    width: 320, height: 40, marginTop: 30, alignSelf: 'center', borderRadius: 10, backgroundColor: '#524ae8'
  },
  main: {
    width: Dimensions.get('window').width, height: Dimensions.get('window').height - 320, backgroundColor: 'white'
  },
  txt: {
    fontSize: 25, alignSelf: 'center', marginTop: 40
  },
  txt1: { fontSize: 15, color: 'blue', marginTop: 5 },
  txt2: {
    color: '#fff', alignSelf: 'center', fontSize: 20, marginTop: 5
  }
})

