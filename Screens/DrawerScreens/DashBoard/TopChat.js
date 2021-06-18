
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity, Image,
    Text,
    useColorScheme, TextInput,
    View, Button, FlatList, Dimensions
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default function TopChat({ menu1, menu2, menu3, menu4 }) {
    return (
        <View style={{ backgroundColor: '#f1f1f1', marginBottom: 10 }}>
            <View elevation={5} style={styles.view}>
                <View style={styles.view1}>
                    <MaterialCommunityIcons name='police-badge-outline' size={30} color='maroon' style={styles.icon} />
                </View>
                <Text style={styles.txt}> Your Licence number is expiring {"\n"} in 08 days.Please renew as soon {"\n"} as possible</Text>
            </View>
            <View elevation={5} style={styles.view}>
                <View style={styles.extra}>

                    <MaterialCommunityIcons name='map-marker-path' size={30} color='blue' style={styles.icon} />
                </View>
                <Text style={styles.txt}>We are tracking your location,so {"\n"} Please keep your GPS turned on.</Text>
            </View>
            <View elevation={5} style={styles.view}>
                <View style={styles.view1}>

                    <MaterialIcons name='location-off' color='maroon' size={30} style={styles.icon} />
                </View>
                <Text style={styles.txt}>Please turn On your GPS,so we {"\n"} can track your location.</Text>
            </View>
        </View>

    );
}//
const styles = StyleSheet.create({
    view:
        { marginTop: 10, width: 350, height: 90, flexDirection: 'row', borderRadius: 10, backgroundColor: '#fff' },
    view1: { width: 60, height: 60, backgroundColor: '#faafb1', borderRadius: 30, marginTop: 10, marginLeft: 5 },
    txt: { fontSize: 18, marginLeft: 5, marginTop: 10 },
    icon: { alignSelf: 'center', marginTop: 15 },
    extra: { width: 60, height: 60, backgroundColor: '#adbded', borderRadius: 30, marginTop: 10, marginLeft: 5 }

})