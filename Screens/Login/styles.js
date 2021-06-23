import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View, Button, TextInput, Image, Dimensions, Keyboard, SafeAreaView, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';

import { LoginBottomHeight, setMargin, buttonSize, dashWidth, horizontal } from '../Functions';

export const styles = StyleSheet.create({
  txtinp: {
    width: dashWidth(), height: 50, fontSize: 18, borderBottomColor: 'grey', borderBottomWidth: 1, alignSelf: 'center', marginTop: setMargin()
  }, txtinp1: {
    width: dashWidth(), height: 50, fontSize: 18, alignSelf: 'center', marginTop: setMargin()
  },
  txtipview:{ 
    width: dashWidth(), height: 70, borderBottomColor: 'grey', borderBottomWidth: 1, alignSelf: 'center', flexDirection: 'row', alignSelf: 'center' 
  },
  view1: {
    flexDirection: 'row', marginTop: setMargin(), justifyContent: 'space-between', marginHorizontal:horizontal()
  },
  button: {
    width: dashWidth(), height: buttonSize(), justifyContent: 'center', marginTop: setMargin(), alignSelf: 'center', borderRadius: 10, backgroundColor: '#524ae8'
  },
  main: {
    width: Dimensions.get('window').width, height: LoginBottomHeight(), backgroundColor: 'white'
  },
  txt: {
    fontSize: 25, alignSelf: 'center', marginTop: setMargin()
  },
  txt1: { fontSize: 15, color: 'blue', marginTop: 5 },
  txt2: {
    color: '#fff', alignSelf: 'center', fontSize: 15
  }
})