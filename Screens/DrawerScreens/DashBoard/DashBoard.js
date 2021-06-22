import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity, Image, Alert,
    Text,
    View, Button, FlatList, Dimensions, PermissionsAndroid
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import TopChat from './TopChat';
import { MenuData } from './MenuData';
import { styles } from './styles';
export default function DashBoard({ navigation }) {
    console.log('wid'+Dimensions.get('window').width)

    React.useEffect(() => {
        checking_location()
    })
    async function checking_location() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'ReactNativeCode Location Permission',
                    'message': 'ReactNativeCode App needs access to your location '
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                console.log("location active");
                setGps(true)
            }
            else {

                console.log("location de active");
                setGps(false)

            }
        } catch (err) {
            console.warn(err)
            setGps(false)
        }
    }
    const [ind, setInd] = useState(0)
    const [gps, setGps] = useState(false)
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
                                <View style={[styles.main1], { borderBottomWidth: ind == index ? 1 : 0, borderBottomColor: 'grey' }}>
                                    <View style={{ flexDirection: 'row', marginTop: 4,marginBottom:4 }}>
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
                        ListHeaderComponent={<TopChat gps={gps} />}
                    /></View>
            </View>
        </View>
    );
}
