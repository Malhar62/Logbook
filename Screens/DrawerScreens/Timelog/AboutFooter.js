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
import { store } from '../../../MST/store';


export default function AboutFooter(DATA) {
    console.log('-----')
    console.log(DATA.DATA)
    const [fake, setFake] = useState([])
    //store.deletefirst(DATA.DATA)
    return (
        <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 20, borderBottomWidth: 1, borderBottomColor: 'grey' }}>Uploaded Files</Text>
            <FlatList
                numColumns={4}
                showsVerticalScrollIndicator={false}
                key={'#'}
                data={DATA.DATA}
                renderItem={({ item, index }) => (
                    <View style={{ marginTop: 10, flexDirection: 'row', width: 80, height: 80 }}>
                        <Image source={{ uri: item.link }} style={{ width: 75, height: 75, borderWidth: 1, borderRadius: 10 }} />
                    </View>
                )}
                keyExtractor={index => index.toString()}
            />
            <View style={{ height: 10 }}></View>
        </View>
    )
}