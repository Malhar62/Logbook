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
import HeaderCommon from './HeaderCommon';

export default function Timelog({navigation}) {
    return (
        <View>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Time log' />
        </View>
    );
}