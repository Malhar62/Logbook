
import React from 'react';
import {
    SafeAreaView,
    View, Button, Dimensions, Text, FlatList, StyleSheet, TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { buttonmargin, buttonSize, buttonWidth, ShiftHeight, ShiftWidth } from '../../Functions1';
import { WIDTH ,HEIGHT} from '../../../Functions';

export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff', width: WIDTH(360), height: HEIGHT(649), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },
    icon: {
        marginTop: 10
    },
    txt: {
        color: 'grey'
    },
    button: {
        width: WIDTH(320), marginBottom: 10, height: 40, justifyContent: 'center', alignSelf: 'center', borderRadius: 10, backgroundColor: '#e6354c'
    },
    txt2: {
        color: '#fff', alignSelf: 'center', fontSize: 15
    },
    addbutton:
        { width:WIDTH(320), height: 40, justifyContent: 'center', marginBottom: 20, borderColor: 'grey', borderWidth: 1, borderRadius: 10, alignSelf: 'center' },
    addbutton1:
        { flexDirection: 'row', alignSelf: 'center' },
    addbuttontxt:
        { color: 'grey', fontSize: 15, marginLeft: 4, marginTop: 1 }
})