import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView, Image,
    StatusBar, Dimensions,
    StyleSheet, TouchableOpacity,
    Text,
    useColorScheme, TextInput, FlatList,
    View, Button
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HeaderCommon from '../HeaderCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShiftHeight, ShiftWidth } from '../Functions1';
import AboutFooter from './AboutFooter';
export default function About({ navigation, route }) {
    const [fake, setFake] = useState([])
    const shorted = route.params.user.item;
    const imgdata = shorted.image
    console.log(imgdata)
  
    let Array = [
        { icon: 'user', title: 'Name', text: shorted.name },//ant0
        { icon: 'police-badge-outline', title: 'Licence', text: shorted.Licence },//mater coom1
        { icon: 'timetable', title: 'Shift Startdate/Time', text: shorted.startDate + ' ' + shorted.startTime },//2
        { icon: 'timetable', title: 'Shift EndDate/Time', text: shorted.endDate + ' ' + shorted.endTime },//3
        { icon: 'location-pin', title: 'Job', text: shorted.job },//mater 4
        { icon: 'office-building', title: 'Company', text: shorted.company },//mat com5
        { icon: 'shape', title: 'Categary', text: shorted.category },//m com6
        { icon: 'clipboard-list-outline', title: 'Tasks', text: shorted.task },//m com7
        { icon: 'description', title: 'Description', text: shorted.description },//m8
    ];

    return (
        <SafeAreaView>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Time logs' extra='yes' onEdit={() => {
                navigation.navigate('AddLog', { user: shorted, index: route.params.user.index })
            }} />
            <View elevation={5} style={styles.main}>
                <FlatList
                    data={Array}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20, borderTopWidth: 0 }}>
                            <View style={{ marginTop: 10 }}>
                                {index == 0 && <AntDesign name={item.icon} size={25} />}
                                {(index == 4 || index == 8) && <MaterialIcons name={item.icon} size={25} />}

                                {index != 0 && index != 4 && index != 8 && <MaterialCommunityIcons name={item.icon}
                                    color={index == 3 ? 'white' : 'black'}
                                    size={25} />}
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 15, color: 'grey' }}>{item.title}</Text>
                                <Text style={{ fontSize: 18 }}>{item.text}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.title}
                    ListFooterComponent={<AboutFooter DATA={imgdata} />}
                />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff', width: ShiftWidth(), height: ShiftHeight(), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },
})