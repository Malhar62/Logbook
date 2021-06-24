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
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderCommon from '../HeaderCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShiftHeight, ShiftWidth } from '../Functions1';
export default function About({ navigation }) {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;

    return (
        <SafeAreaView>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Time logs' />
            <View elevation={5} style={styles.main}>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff', width: ShiftWidth(), height: ShiftHeight(), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },
})