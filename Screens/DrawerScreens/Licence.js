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
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderCommon from './HeaderCommon';
export default function Licence({ navigation }) {
    return (
        <View>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Licences' />
        </View>
    );
}