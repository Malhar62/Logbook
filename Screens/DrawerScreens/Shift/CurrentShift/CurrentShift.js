import React from 'react';
import {
    SafeAreaView,
    View, Button, Dimensions, Text, FlatList, StyleSheet, TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderCommon from '../../HeaderCommon';
import { styles } from './styles';
import { buttonmargin, buttonSize, buttonWidth, ShiftHeight, ShiftWidth } from '../Functions1';

export default function CurrentShift({ navigation, route }) {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    let Array = [
        { name: 'user', title: 'Username', text: 'Shanice Barwick' },//
        { name: 'email-outline', title: 'Email Address', text: 'Shanice.berwick@baxter.com' },//
        { name: 'police-badge-outline', title: 'Licence', text: 'RHGJS65S8' },//
        { name: 'office-building', title: 'Main Company', text: route.params.company },
        { name: 'location-pin', title: 'Job Site', text: route.params.job },//
        { name: 'date-range', title: 'Date', text: route.params.date },
        { name: 'access-time', title: 'Time', text: route.params.time },
    ]
    return (
        <View>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Current Shift' />
            <View elevation={5} style={styles.main}>

                <FlatList
                showsVerticalScrollIndicator={false}
                    data={Array}
                    renderItem={({ item, index }) => (
                        <View style={{ marginTop: 10, flexDirection: 'row', marginHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#bcccb6' }}>
                            <View>
                                {index == 0 && <AntDesign name={item.name} size={25} style={styles.icon} />}
                                {index > 0 && index < 4 && <MaterialCommunityIcons name={item.name} size={25} style={styles.icon} />}
                                {index > 3 && <MaterialIcons name={item.name} size={25} style={styles.icon} />}
                            </View>
                            <View style={{ marginLeft: 10, marginBottom: 10 }}>
                                <Text style={styles.txt}>{item.title}</Text>
                                <Text style={{ marginVertical: 5 }}>{item.text}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.name}
                />
                <View style={styles.addbutton}>
                    <TouchableOpacity onPress={() => navigation.navigate('Timelog')}>
                        <View style={styles.addbutton1}>
                            <MaterialIcons name='add-circle-outline' size={25} color='grey' />
                            <Text style={styles.addbuttontxt}>Add Time Log</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('DashBoard')} >
                        <Text style={styles.txt2}>End Shift</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
