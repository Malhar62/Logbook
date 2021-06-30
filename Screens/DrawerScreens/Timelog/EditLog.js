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
import { HEIGHT, WIDTH } from '../../Functions';
export default function EditLog({ navigation }) {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;

    return (
        <SafeAreaView>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Edit Time log' />
            <View elevation={5} style={styles.main}>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',width: WIDTH(360), height: HEIGHT(649), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },
})