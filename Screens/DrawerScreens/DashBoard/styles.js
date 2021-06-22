import React, { useState } from 'react';
import {
    StyleSheet
} from 'react-native';
import { dashHeight, dashWidth } from '../../Functions';
export const styles = StyleSheet.create({
    first: {
        width: dashWidth(), alignSelf: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: 'rgba(158, 150, 150, .5)'
    },
    main: {
        width: '100%', borderRadius: 10, backgroundColor: '#ebe6e6',
    },
    main1:
        { flexDirection: 'row', height: 60, width: dashWidth(), alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: 'grey', borderTopEndRadius: 10, borderTopLeftRadius: 10 },
    main3:
        { borderBottomColor: 'grey', width: (dashWidth()-30), alignSelf: 'center' },
    main4: {
        height: dashHeight(), width: '100%', borderRadius: 0, backgroundColor: '#f1f1f1',
    },
    txt1:
        { color: 'grey', marginLeft: 7, fontSize: 18 },
    view:
        { flexDirection: 'row', marginBottom: 7 },
    icon:
        { position: 'absolute', right: 0, marginRight: 5, marginTop: 5 },
    txt2: { fontSize: 22, marginLeft: 10, fontWeight: 'bold' },


})