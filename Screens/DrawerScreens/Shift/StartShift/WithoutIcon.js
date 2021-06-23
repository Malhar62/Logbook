
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

export default  function withoutIcon({ first, second }) {
    return (
        <View style={styles.view1}>
            <Text>{first}</Text>
            <Text style={styles.txt}>{second}</Text>
        </View>
    )
}