import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity, Image, Alert,
    Text,
    useColorScheme, TextInput,
    View, Button, FlatList, Dimensions
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import TopChat from './TopChat';
import { MenuData } from './MenuData';
export default function DashBoard({ navigation }) {
    const [ind, setInd] = useState(0)

    const arrow = '>'
    function switching(index) {
        setInd(index)
    }
    function SignOut() {
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
        <View style={{ flex: 1, backgroundColor: '#ebe6e6' }}>
            <Header onDrawer={() => navigation.openDrawer()} onNavi={() => SignOut()} />
            <View style={styles.main}>
                <View style={styles.main4}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={MenuData}
                        renderItem={({ item, index }) => (
                            <View style={[styles.first, {
                                 borderTopRightRadius: index == 0 ? 10 : 0,
                                  borderTopLeftRadius: index == 0 ? 10 : 0, 
                                  borderBottomRightRadius: index == 3 ? 10 : 0,
                                   borderBottomLeftRadius: index == 3 ? 10 : 0 
                                   }]}>
                                <View style={[styles.main1], { borderBottomWidth: ind == index ? 1 : 0, }}>
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
                                        <View style={[styles.main3, { borderBottomWidth: index != 4 ? 1 : 0 }]}>
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
    first: {
        width: 350, alignSelf: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: 'rgba(158, 150, 150, .5)'
    },
    main: {
        height: 670, width: '100%', borderRadius: 10, backgroundColor: '#ebe6e6',
    },
    main1:
        { flexDirection: 'row', height: 40, width: 350, alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: 'grey', borderTopEndRadius: 10, borderTopLeftRadius: 10 },
    main3:
        { borderBottomColor: 'grey', width: 320, alignSelf: 'center' },
    main4: {
        height: 670, width: '100%', borderRadius: 0, backgroundColor: '#f1f1f1',
    },
    txt1:
        { color: 'grey', marginLeft: 7, fontSize: 18 },
    view:
        { flexDirection: 'row', marginBottom: 7 },
    icon:
        { position: 'absolute', marginLeft: 310, marginTop: 5 },
    txt2: { fontSize: 22, marginLeft: 10, fontWeight: 'bold' },


})