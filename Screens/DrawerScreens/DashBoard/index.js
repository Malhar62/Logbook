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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import DropDownItem from 'react-native-drop-down-item';
import TopChat from './TopChat';
import { MenuData } from './MenuData';
export default function DashBoard({ navigation }) {
    const [ind, setInd] = useState(0)

    const arrow = '>'
    function switching(index) {
        setInd(index)
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <Header onDrawer={() => navigation.openDrawer()} onNavi={() => navigation.navigate('Login')} />
            <ScrollView style={{ backgroundColor: '#f1f1f1' }}>
                <View elevation={5} style={[styles.main, { height: 1000, marginTop: 0 }]}>
                    <TopChat />
                    <View style={{ marginTop: 10 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={MenuData}
                            renderItem={({ item, index }) => (
                                <View>
                                    <View style={styles.main1}>
                                        <View style={{ flexDirection: 'row', marginTop: 4 }}>
                                            <Text style={styles.txt2}>{item.title}</Text>
                                            <AntDesign style={styles.icon} name={index == ind ? 'down' : 'up'} size={20}
                                                onPress={() => {
                                                    switching(index)
                                                }} />
                                        </View>
                                    </View>
                                    {index == ind && <FlatList
                                        data={item.DropMenu}
                                        renderItem={({ item, index }) => (
                                            <View style={styles.main3}>
                                                <Text style={{ marginTop: 5, fontSize: 18, marginBottom: 7 }}>{item.name}</Text>
                                                <View style={styles.view}>
                                                    <AntDesign name='mail' size={25} color='grey' />
                                                    <Text style={styles.txt1}>{item.mail}</Text>
                                                </View>
                                                <View style={styles.view}>
                                                    <Ionicons name='call-outline' size={25} color='grey' />
                                                    <Text style={styles.txt1}>{item.call}</Text>
                                                </View>
                                            </View>
                                        )}
                                        keyExtractor={item => item.name}
                                    />}
                                </View>
                            )}
                            keyExtractor={item => item.title}
                        /></View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        marginTop: 10, width: 350, borderRadius: 20, backgroundColor: '#fff', marginHorizontal: 20
    },
    main1:
        { flexDirection: 'row', height: 40, borderBottomWidth: 1, borderBottomColor: 'grey', borderTopEndRadius: 10, borderTopLeftRadius: 10, },
    main3:
        { borderBottomWidth: 1, borderBottomColor: 'grey', marginHorizontal: 20 },
    txt1:
        { color: 'grey', marginLeft: 7, fontSize: 18 },
    view:
        { flexDirection: 'row', marginBottom: 7 },
    icon:
        { position: 'absolute', marginLeft: 310, marginTop: 5 },
    txt2: { fontSize: 22, marginLeft: 10, fontWeight: 'bold' },


})