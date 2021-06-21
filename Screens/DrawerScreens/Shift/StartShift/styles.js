
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar, Dimensions,
    StyleSheet, TouchableOpacity,
    Text,
    useColorScheme, TextInput,
    View, Button
} from 'react-native';
import { buttonmargin, horizontal, iconMargin, setMargin1, ShiftHeight, ShiftWidth,buttonSize, buttonWidth } from '../../Shift/Functions1';

export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff', width: ShiftWidth(), height:ShiftHeight(), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },
    view1: {
        marginHorizontal: horizontal(), borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: setMargin1()
    },
    txt: {
        marginVertical: 5, marginBottom: 10
    },
    icon: {
        marginLeft: iconMargin(), marginTop: 4
    },
    button: {
        width: buttonWidth(), height: buttonSize(), justifyContent: 'center', marginTop: buttonmargin(), alignSelf: 'center', borderRadius: 10, backgroundColor: '#67cf40'
    },
    txt2: {
        color: '#fff', alignSelf: 'center', fontSize: 15
    }

})