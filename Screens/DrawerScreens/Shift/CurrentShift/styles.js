
import React from 'react';
import {
    SafeAreaView,
    View, Button, Dimensions, Text, FlatList, StyleSheet, TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { buttonmargin, buttonSize, buttonWidth, ShiftHeight, ShiftWidth } from '../Functions1';

export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff', width: ShiftWidth(), height: ShiftHeight(), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },
    icon: {
        marginTop: 10
    },
    txt: {
        color: 'grey'
    },
    button: {
        width: buttonWidth(), marginBottom: 10, height: buttonSize(), justifyContent: 'center', alignSelf: 'center', borderRadius: 10, backgroundColor: '#e6354c'
    },
    txt2: {
        color: '#fff', alignSelf: 'center', fontSize: 15
    }

})