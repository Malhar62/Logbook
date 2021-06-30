import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar, Dimensions,
    StyleSheet, TouchableOpacity,
    Text,
    View, Button, FlatList
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderCommon from '../HeaderCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { buttonWidth, ShiftHeight, ShiftWidth } from '../Functions1';
import { store } from '../../../MST/store';
import { HEIGHT, WIDTH } from '../../Functions';
export default function Logs({ navigation }) {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    const [list, setList] = React.useState(store.logs.toJSON())

    const [date, setDate] = React.useState('')
    const [time, setTime] = React.useState('')
    React.useEffect(() => {
        navigation.addListener('focus', () => {
            setList(store.logs.toJSON())
            console.log(store.logs.toJSON())
        })
    }, [navigation]);

    function gotoAdd() {
        store.clearData()
        navigation.navigate('AddLog')
    }
    return (
        <SafeAreaView>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Time logs' />
            <View elevation={5} style={styles.main}>
                <View style={styles.addbutton}>
                    <TouchableOpacity onPress={() => gotoAdd()}>
                        <View style={styles.addbutton1}>
                            <MaterialIcons name='add-circle-outline' size={25} color='grey' />
                            <Text style={styles.addbuttontxt}>Add Time Log</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={list}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => {
                                let obj={item ,index}
                                navigation.navigate('About', { user: obj})
                            }}>
                                <View style={styles.view}>
                                    <View>
                                        <Text style={styles.txt}> {item.Licence}</Text>
                                        <Text style={styles.txt}> {item.category}</Text>
                                        <Text style={styles.txt}> {item.task}</Text>
                                    </View>
                                    <View style={styles.icon}>
                                        <AntDesign name='arrowright' size={20} color='grey' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={index => index.toString()}
                    />
                </View>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',width: WIDTH(360), height: HEIGHT(649), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },
    view: {
        flexDirection: 'row', marginHorizontal: 15, marginTop: 20
    },
    txt: {
        fontSize: 15, color: 'grey'
    },
    icon: {
        right: 0, justifyContent: 'center', position: 'absolute', marginTop: 18
    }
    ,
    addbutton:
        { width:WIDTH(320), height: 40, justifyContent: 'center', marginBottom: 20, borderColor: 'grey', borderWidth: 1, borderRadius: 10, alignSelf: 'center', top: 20 },
    addbutton1:
        { flexDirection: 'row', alignSelf: 'center' },
    addbuttontxt:
        { color: 'grey', fontSize: 15, marginLeft: 4, marginTop: 1 }

})
/* var date = new Date().getDate();
                        var month = new Date().getMonth() + 1;
                        var year = new Date().getFullYear();
                        var hours = new Date().getHours();
                        var min = new Date().getMinutes();
                        var sec = new Date().getSeconds();
                        setEnddate(date + '-' + month + '-' + year)
                        if (hours > 12) {
                            setEndtime((hours - 12) + ':' + min + ':' + sec + ' PM')
                        } else {
                            setEndtime(hours + ':' + min + ':' + sec + ' AM');
                        }
                        let obj = {
                            name: Array[0].text,
                            Licence: Array[0].text,
                            job: Array[1].text,
                            company: Array[2].text,
                            category: Array[3].text,
                            task: Array[4].text,
                            description: Array[5].text,
                            startDate: Array[5].text,
                            startTime: Array[6].text,
                            endTime: endtime,
                            endDate: enddate
                        }
                        store.endShift(obj) */