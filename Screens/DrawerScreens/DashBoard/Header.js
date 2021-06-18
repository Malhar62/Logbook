import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity, Image,
    Text,
    useColorScheme, TextInput,
    View, Button
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAswesome from 'react-native-vector-icons/FontAwesome';

export default function Header({ onDrawer,onNavi }) {

    return (
        <View>
            <View style={{ width: '100%', height: 60, backgroundColor: '#524ae8' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10 }}>
                    <Entypo name='menu' color='white' size={30} onPress={() => onDrawer()} style={{ marginTop: 5 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../Components/logo.png')} style={{ width: 40, height: 40 }} />
                        <Text style={{ fontSize: 25, marginLeft:5,color: 'white', fontFamily: 'serif-monospace', alignSelf: 'center' }}>LOGBOOKS PRO</Text>
                    </View>
                    <FontAswesome name='power-off' style={{ marginTop: 9 }} size={24} color='white' onPress={() =>onNavi()} />
                </View>
            </View>
        </View>
    );
}