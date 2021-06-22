import React from 'react';
import {
    StyleSheet, TouchableOpacity,
    View, Button, FlatList, Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderCommon from '../../HeaderCommon';
import { ShiftHeight, ShiftWidth, buttonSize, buttonWidth, buttonWidth1, horizontal, textheight } from '../../Functions1';
import { RadioButton } from 'react-native-paper';


export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff', width: ShiftWidth(), height: ShiftHeight(), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },
    view: {
        flexDirection: 'row', height: 70, marginHorizontal: horizontal(), marginTop: 15
    },
    txt1: {
        fontSize: 18
    }, txt2: {
        fontSize: 15, color: 'grey'
    }, radio: {
        position: 'absolute', right: 0, marginTop: 5
    },
    extra:{
        width:textheight(),height:40
    },
    view1:
        { flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' },
    button:
        { width: buttonWidth1(), height: 45, backgroundColor: '#524ae8', borderRadius: 10, justifyContent: 'center' },
    buttontxt:
        { color: '#fff', alignSelf: 'center', fontSize: 15 }
})