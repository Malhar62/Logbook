import React from 'react';
import {
    StyleSheet, TouchableOpacity,
    View, Button, FlatList, Text
} from 'react-native';
import {HEIGHT,WIDTH} from '../../../Functions';

export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',width: WIDTH(360), height: HEIGHT(649), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },
    view: {
        flexDirection: 'row', height: 70, marginHorizontal: 15, marginTop: 15
    },
    txt1: {
        fontSize: 18
    }, txt2: {
        fontSize: 15, color: 'grey'
    }, radio: {
        position: 'absolute', right: 0, marginTop: 5
    },
    extra: {
        width: HEIGHT(20), height: 40
    },
    view1:
        { flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' },
    button:
        { width: WIDTH(150), height: 45, backgroundColor: '#524ae8', borderRadius: 10, justifyContent: 'center' },
    buttontxt:
        { color: '#fff', alignSelf: 'center', fontSize: 15 }
})