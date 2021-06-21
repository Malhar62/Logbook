import React, { useState } from 'react';
import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    first: {
        width: 350, alignSelf: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: 'rgba(158, 150, 150, .5)'
    },
    main: {
        height: 670, width: '100%', borderRadius: 10, backgroundColor: '#ebe6e6',
    },
    main1:
        { flexDirection: 'row', height: 60, width: 350, alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: 'grey', borderTopEndRadius: 10, borderTopLeftRadius: 10 },
    main3:
        { borderBottomColor: 'grey', width: 320, alignSelf: 'center' },
    main4: {
        height: 670, width: '100%', borderRadius: 0, backgroundColor: '#f1f1f1',
    },
    txt1:
        { color: 'grey', marginLeft: 7, fontSize: 18 },
    view:
        { flexDirection: 'row', marginBottom: 7 },
    icon:
        { position: 'absolute', marginLeft: 310, marginTop: 5 },
    txt2: { fontSize: 22, marginLeft: 10, fontWeight: 'bold' },


})