import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, ImageBackground,
    FlatList, TouchableOpacity,
    Image,
    View,
    Dimensions,
} from 'react-native';
import { HEIGHT, WIDTH } from '../../Screens/Functions';
import { store } from '../../MST/store'

export default function HomeHeader({ title }) {
    const BACK_COLOR = store.theme ? '#101010' : '#fff'

    return (
        <View style={{ width: '100%', height: HEIGHT(60), backgroundColor: BACK_COLOR, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#a89fde', fontSize: 18 }}>{title.toUpperCase()} NEWS</Text>
        </View>
    )
}