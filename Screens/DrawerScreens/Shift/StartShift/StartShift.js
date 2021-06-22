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
import { buttonmargin, horizontal, iconMargin, setMargin1, ShiftHeight, ShiftWidth, buttonSize, buttonWidth } from '../../Shift/Functions1';
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
    return (
        <View>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Start Shift' />
            <View elevation={5} style={styles.main}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.view1}>
                        <Text>Username</Text>
                        <Text style={styles.txt}>Shanice Barwick</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text>Email Address</Text>
                        <Text style={styles.txt}>Shanice.barwick@baxter.com</Text>
                    </View>
                    <View style={[styles.view1, { borderBottomWidth: 0 }]}>
                        <Text>Licence Number</Text>
                        <Text style={styles.txt}>RVLG336HSD8</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text>Main Company</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Company')} >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.txt}>{company}</Text>
                                <View style={{ position: 'absolute' }}>
                                    <AntDesign name={'down'} size={20} style={styles.icon} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view1}>
                        <Text>Job site</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('JobSite')} >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.txt}>{job}</Text>
                                <View style={{ position: 'absolute' }}>
                                    <AntDesign name={'down'} size={20} style={styles.icon} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view1}>
                        <Text>Date</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.txt}>{date}</Text>
                            <View style={{ position: 'absolute' }}>
                                <MaterialIcons name={'date-range'} size={20} style={styles.icon} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.view1}>
                        <Text>Time</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.txt}>{time}</Text>
                            <View style={{ position: 'absolute' }}>
                                <MaterialIcons name={'access-time'} size={20} style={styles.icon} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('CurrentShift', { company, job, date, time })} >
                        <Text style={styles.txt2}>Start Shift</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10 }}></View>
            </View>

        </View>
    );
}
