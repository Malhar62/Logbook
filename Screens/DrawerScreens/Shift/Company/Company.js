import React from 'react';
import {
    StyleSheet, TouchableOpacity,
    View, Button, FlatList, Text
} from 'react-native';
import HeaderCommon from '../../HeaderCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommonSelection from '../CommonSelection';


export default function Company({ navigation }) {
    const [ind, setInd] = React.useState(null);
    let Array = [
        { title: 'Allied Universal', text: '42 Mortimer St.Wingham', flag: false },
        { title: 'Monitronics', text: '18 DavidSon St.Church', flag: false },
        { title: 'Guardio Securities', text: '4 Emarald Drv.Southside', flag: false },
        { title: 'Pinkeron Security', text: '22 Golf Link Roads', flag: false },
    ];

    async function handleSelect(name) {
        await AsyncStorage.setItem('COMPANY_NAME', name);
        navigation.navigate('StartShift')
    }
    return (
        <View>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Select Main Company' />
            <CommonSelection
                Array={Array}
                handleSelect={(name) => handleSelect(name)}
                handleCancel={() => navigation.goBack()}
            />
        </View>
    );
}
