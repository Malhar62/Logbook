
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { buttonmargin, horizontal, iconMargin, setMargin1, ShiftHeight, ShiftWidth, buttonSize, buttonWidth } from '../../Functions1';

export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff', width: ShiftWidth(), height: ShiftHeight(), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },
    view1: {
        marginHorizontal: horizontal(), borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: setMargin1()
    },
    txt: {
        marginVertical: 5, marginBottom: 10, fontSize: 15
    },
    icon: {
        marginLeft: iconMargin(), marginTop: 4
    },
    button: {
        width: buttonWidth(), height: buttonSize(), justifyContent: 'center', alignSelf: 'center', borderRadius: 10, backgroundColor: '#67cf40'
    },
    txt2: {
        color: '#fff', alignSelf: 'center', fontSize: 15
    }

})