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
import { ShiftWidth, ShiftHeight } from '../Functions1'
export default function LicenceDetail({ navigation }) {
    return (
        <View>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Licences' />
            <View elevation={5} style={styles.main}>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff', width: ShiftWidth(), height: ShiftHeight(), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },

})