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
import WithIcon from './WithIcon'
import WithoutIcon from './WithoutIcon';
export default function StartShift({ navigation }) {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    const [company, setCompany] = useState('')
    const [job, setJob] = useState('')
    const [date, setDate] = useState('');
    const [time, setTime] = useState('')
    useEffect(() => {
        const unsub = navigation.addListener('focus', async () => {
            try {
                const value = await AsyncStorage.getItem('COMPANY_NAME')
                const value1 = await AsyncStorage.getItem('JOB_SITE')

                if (value !== null) {
                    setCompany(value)
                } else {
                    setCompany('Select a company')
                }

                if (value1 !== null) {
                    setJob(value1)
                } else {
                    setJob('Select the Job location')
                }
            } catch (e) {
                // error reading value
            }
        })

        return unsub;
    }, [navigation])

    React.useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();
        setDate(date + '-' + month + '-' + year)
        if (hours > 12) {
            setTime((hours - 12) + ':' + min + ':' + sec + ' PM')
        } else {
            setTime(hours + ':' + min + ':' + sec + ' AM');
        }
    }, [])
    function onNavi(data) {
        if (data !== '') {
            navigation.navigate(data);
        }
    }
    return (
        <SafeAreaView>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Start Shift' />
            <View elevation={5} style={styles.main}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>

                    <WithoutIcon first={'Email Address'} second={'Shanice Barwick'} />
                    <WithoutIcon first={'Licence Number'} second={'RVLG336HSD8'} />
                    <WithIcon first={'Main Company'} second={company} onNavi={(data) => onNavi(data)} flag='ANT' />
                    <WithIcon first={'Job Site'} second={job} onNavi={(data) => onNavi(data)} flag='ANT' />
                    <WithIcon first={'Date'} second={date} flag='' onNavi={(data) => onNavi(data)} name='date-range' />
                    <WithIcon first={'Date'} second={date} flag='' onNavi={(data) => onNavi(data)} name='access-time' />
                </ScrollView>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('CurrentShift', { company, job, date, time })} >
                        <Text style={styles.txt2}>Start Shift</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 15 }}></View>
            </View>

        </SafeAreaView>
    );
}
