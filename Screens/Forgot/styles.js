
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity,
    Text,
    useColorScheme, TextInput, Keyboard, KeyboardAvoidingView,
    View, Button, Dimensions
} from 'react-native';
import { buttonSize, HEIGHT, LoginBottomHeight, setMargin } from '../Functions';



export const styles = StyleSheet.create({
    txt: {
        fontSize: 15, alignSelf: 'center', marginHorizontal: 20, marginTop: 10, color: 'grey'
    }, txtinp: {
        width: WIDTH(320), height: 50, fontSize: 18, borderBottomColor: 'grey', borderBottomWidth: 1, alignSelf: 'center', marginTop: HEIGHT(30)
    },
    button: {
        width: WIDTH(320), height:HEIGHT(40), marginTop: HEIGHT(30),justifyContent:'center', alignSelf: 'center', borderRadius: 10, backgroundColor: '#524ae8'
    }, txt2: {
        color: '#fff', alignSelf: 'center', fontSize: 16, 
    }, 
    txt1: { fontSize: 15, color: 'blue', alignSelf: 'center', marginTop:HEIGHT(300) },

})