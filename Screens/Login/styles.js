import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View, Button, TextInput, Image, Dimensions, Keyboard, SafeAreaView, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';

import { LoginBottomHeight, setMargin, buttonSize, dashWidth, horizontal, WIDTH, HEIGHT } from '../Functions';

export const styles = StyleSheet.create({
  txtinp: {
    width: WIDTH(320), height: 50, fontSize: 18, borderBottomColor: 'grey', borderBottomWidth: 1, alignSelf: 'center', marginTop: HEIGHT(30)
  }, txtinp1: {
    width: WIDTH(320), height: 50, fontSize: 18, alignSelf: 'center', marginTop: HEIGHT(30)
  },
  txtipview: {
    width: WIDTH(320), height: 70, borderBottomColor: 'grey', borderBottomWidth: 1, alignSelf: 'center', flexDirection: 'row', alignSelf: 'center'
  },
  view1: {
    flexDirection: 'row', marginTop: HEIGHT(30), justifyContent: 'space-between', marginHorizontal: WIDTH(20)
  },
  button: {
    width: WIDTH(320), height: HEIGHT(40), justifyContent: 'center', marginTop: HEIGHT(30), alignSelf: 'center', borderRadius: 10, backgroundColor: '#524ae8'
  },
  main: {
    width: Dimensions.get('window').width, height: HEIGHT(450), backgroundColor: 'white'
  },
  txt: {
    fontSize: 25, alignSelf: 'center', marginTop: HEIGHT(30)
  },
  txt1: { fontSize: 15, color: 'blue', marginTop: 5 },
  txt2: {
    color: '#fff', alignSelf: 'center', fontSize: 15
  }
})