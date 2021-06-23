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
import HeaderCommon from '../../HeaderCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles'



export default function withIcon({ first, second, onNavi, flag,name }) {
    return (
        <View style={styles.view1}>
            <Text>{first}</Text>
            <TouchableOpacity onPress={() =>{
                var value=first=='Main Company'?'Company':first=='Job Site'?'JobSite':'';
                 onNavi(value)}} >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.txt}>{second}</Text>
                    <View style={styles.iconview}>
                        {flag == 'ANT' ? <AntDesign name={'down'} size={20} style={styles.icon} /> :
                            <MaterialIcons name={name} size={20} style={styles.icon} />
                        }
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
