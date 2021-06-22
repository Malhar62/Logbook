import React from 'react';
import {
    StyleSheet, TouchableOpacity,
    View, Button, FlatList, Text
} from 'react-native';
import HeaderCommon from '../../HeaderCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommonSelection from '../CommonSelection';
export default function Company({ navigation }) {
    let Array = [
        { title: 'Baxter International', text: '34 Sullivan road,StrathfieldSaye,VIC 3551', flag: false },
        { title: 'Hershey', text: '18 DavidSon St.Church', flag: false },
        { title: 'Rockwell Automation', text: '36 Wanilla Road,Seaford', flag: false },
        { title: 'TreeHouse Foods', text: '22 Golf Link Roads', flag: false },
        { title: 'InterPublic Group', text: '247 grand pele Road,NY', flag: false },
    ];

    async function handleSelect(name) {
        await AsyncStorage.setItem('JOB_SITE', name);
        navigation.navigate('StartShift')
    }
    return (
        <View>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Select Job Site' />
            <CommonSelection
                Array={Array}
                handleSelect={(name) => handleSelect(name)}
                handleCancel={() => navigation.goBack()}
                flag='JOB'
            />
        </View>
    );
}
