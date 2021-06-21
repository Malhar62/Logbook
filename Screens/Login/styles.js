import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View, Button, TextInput, Image, Dimensions, Keyboard, SafeAreaView, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';

import { LoginBottomHeight,setMargin,buttonSize } from '../Functions';

export const styles = StyleSheet.create({
    txtinp: {
      width: 320, height: 50, fontSize: 18, borderBottomColor: 'grey', borderBottomWidth: 1, alignSelf: 'center',  marginTop: setMargin()
    }, txtinp1: {
      width: 300, height: 50, fontSize: 18, alignSelf: 'center',  marginTop: setMargin()
    },
    view1: {
      flexDirection: 'row',  marginTop: setMargin(), justifyContent: 'space-between', marginHorizontal: 40
    },
    button: {
      width: 320, height: buttonSize(),justifyContent:'center',  marginTop: setMargin(), alignSelf: 'center', borderRadius: 10, backgroundColor: '#524ae8'
    },
    main: {
      width: Dimensions.get('window').width, height: LoginBottomHeight(), backgroundColor: 'white'
    },
    txt: {
      fontSize: 25, alignSelf: 'center',  marginTop: setMargin()
    },
    txt1: { fontSize: 15, color: 'blue', marginTop: 5 },
    txt2: {
      color: '#fff', alignSelf: 'center',fontSize:15
    }
  })