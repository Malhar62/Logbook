import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity,
    Text,
    useColorScheme, TextInput,
    View, Button
} from 'react-native';
import HeaderCommon from '../HeaderCommon';

export default function UpdateDetail({navigation}) {
    return (
        <View>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Update Licence Information' />
        </View>
    );
}