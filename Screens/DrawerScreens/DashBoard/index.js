import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity, Image,Alert,
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
    function SignOut(){
        Alert.alert(
            "SIGN OUT",
            "Confirm Signout?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => navigation.navigate('Login')
                }
            ]
        );
    }
    return (
        <View style={{ height: '100%', backgroundColor: '#ebe6e6' }}>
            <Header onDrawer={() => navigation.openDrawer()} onNavi={() => SignOut()} />
            <View style={styles.main}>
                <View elevation={5} style={styles.main4}>
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
                                {index === ind && <FlatList
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
                        ListHeaderComponent={<TopChat />}
                    /></View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        marginTop: 5, height: 670, width: '100%', borderRadius: 100, backgroundColor: '#ebe6e6',
    },
    main1:
        { flexDirection: 'row', height: 40, borderBottomWidth: 1, borderBottomColor: 'grey', borderTopEndRadius: 10, borderTopLeftRadius: 10 },
    main3:
        { borderBottomWidth: 1, borderBottomColor: 'grey', marginHorizontal: 20 },
        main4:{
            marginTop: 10, height: 670, width: 350, borderRadius: 0, backgroundColor: '#fff', marginHorizontal: 20

        },
    txt1:
        { color: 'grey', marginLeft: 7, fontSize: 18 },
    view:
        { flexDirection: 'row', marginBottom: 7 },
    icon:
        { position: 'absolute', marginLeft: 310, marginTop: 5 },
    txt2: { fontSize: 22, marginLeft: 10, fontWeight: 'bold' },


})