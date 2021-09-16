
import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    ImageBackground, Image, TouchableOpacity, Button,
    View, Animated
} from 'react-native';
import { HEIGHT } from '../../Screens/Functions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function SavedHeader({ COLOR, TXT, onNavi,title }) {
    return (
        <View style={{ height: HEIGHT(60), backgroundColor: COLOR, flexDirection: 'row', alignItems: 'center', borderBottomColor: '#f1f1f1', borderBottomWidth: 2 }}>
           
            <View style={{ width: '100%' }}>
                <TouchableOpacity onPress={() => console.log('boom')}>
                    <Text style={{ color: '#a89fde', fontSize: 18, textAlign: 'center' }}>{title}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', left: 7 }}>
                <MaterialIcons name='chevron-left' size={30} color={TXT} onPress={() => onNavi()} />
            </View>
        </View>
    )
}
//40,35,26,8
