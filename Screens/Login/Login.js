

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
import { LoginBottomHeight, setMargin, buttonSize, HEIGHT } from '../Functions';
import { styles } from './styles';
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
  console.log('height : ' + HEIGHT)
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
        <View style={styles.txtipview}>
          <TextInput
            placeholder='Password'
            secureTextEntry={flag}
            value={pass}
            onChangeText={text => setPass(text)}
            style={styles.txtinp1}
          />
          <Feather name={flag ? 'eye-off' : 'eye'} color={flag ? 'black' : 'grey'} size={25} onPress={() => setFlag(!flag)} style={{ marginTop: HEIGHT(10), right: 0, position: 'absolute' }} />

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



