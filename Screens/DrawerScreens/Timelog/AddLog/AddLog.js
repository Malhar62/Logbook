import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar, Dimensions,
    StyleSheet, TouchableOpacity,
    Text,
    useColorScheme, TextInput,
    View, Button, FlatList, Keyboard, TouchableWithoutFeedback, Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import Entypo from 'react-native-vector-icons/Entypo';
import HeaderCommon from '../../HeaderCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { buttonWidth1, ShiftHeight, ShiftWidth, textheight } from '../../Functions1';
import TopBox from './TopBox';
import { store } from '../../../../MST/store';
import { launchCamera, launchImageLibrary } from "react-native-image-picker"

export default function AddLog({ navigation, route }) {
    const [path, setPath] = React.useState('')
    const [list, setList] = React.useState(store.images.toJSON())
    const [date1, setDate1] = React.useState('')
    const [time1, setTime1] = React.useState('')
    const [extra, setExtra] = React.useState(route.params.user.date)
    const [extra1, setExtra1] = React.useState(route.params.user.time)
    const selectFile = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response.assets[0].uri));
                imgadding(response.assets[0].uri)
            }
        });
    }
    function imgadding(data) {
        let obj = { link: data }
        console.log('image added')
        store.addImage(obj)
        setList(store.images.toJSON())
    }
    function addLog() {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();

        let obj = {
            name: 'Shanice barwick',
            Licence: 'HHV62J28C',
            job: 'Baxter',
            company: 'Guardio Securities',
            category: store.categories,
            task: store.tasks,
            description: store.desp,
            startDate: extra,
            endDate: date + '-' + month + '-' + year,
            startTime: extra1,
            endTime: hours + ':' + min + ':' + sec,
        }
        if (obj.category == '' || obj.task == '') {
            alert('enter details')
        } else {
            store.addLog(obj)
            navigation.navigate('Logs')
        }
    }
    return (
        <SafeAreaView>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Add Time log' />
            <View elevation={5} style={styles.main}>
                <FlatList
                    numColumns={4}
                    showsVerticalScrollIndicator={false}
                    key={'#'}
                    data={list}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => {
                            if (index == 0) {
                                selectFile()
                            }
                        }}>
                            <View style={{ marginLeft: 8, marginTop: 10, flexDirection: 'row', width: 80, height: 80 }}>
                                <Image source={{ uri: item.link }} style={{ width: 75, height: 75, borderWidth: 1, borderRadius: 10 }} />
                                {index != 0 && <Entypo name='circle-with-cross' color='#e62e46' size={20} style={{ position: 'absolute', backgroundColor: 'transparent', right: 0, top: 0 }} />}
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.link}
                    ListHeaderComponent={<TopBox />}
                />
                <View style={{ bottom: 15 }}>
                    <View style={styles.view1}>
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={() => {
                                    addLog()
                                }}
                            ><Text style={styles.buttontxt}>Add</Text></TouchableOpacity>
                        </View>
                        <View style={[styles.button, { backgroundColor: '#fff', borderColor: 'grey', borderWidth: 1 }]}>
                            <TouchableOpacity
                                onPress={() => { }}
                            ><Text style={[styles.buttontxt, { color: 'grey' }]}>Cancel</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>

                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff', width: ShiftWidth(), height: ShiftHeight(), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },
    view1:
        { flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' },
    button:
        { width: buttonWidth1(), height: 45, backgroundColor: '#524ae8', borderRadius: 10, justifyContent: 'center' },
    buttontxt:
        { color: '#fff', alignSelf: 'center', fontSize: 15 }
})