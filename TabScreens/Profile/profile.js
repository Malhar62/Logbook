import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, Image,
    View, Switch, TouchableOpacity
} from 'react-native';
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native"
import { store } from '../../MST/store'
import { newsStore } from '../../MST/newsStore';
import Followed from './data';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HEIGHT } from '../../Screens/Functions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default function ProfileScreen() {
    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false);
    const BACK_COLOR = store.theme ? '#101010' : '#fff'
    const FONT_COLOR = store.theme ? '#fff' : '#3d3d3d'

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        store.changeMode(!isEnabled)
        console.log(store.theme)
    }
    const URL = 'data:image/jpeg;base64,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'
    return (
        <View style={{ flex: 1, backgroundColor: isEnabled ? 'black' : '#fff', paddingTop: HEIGHT(40) }}>
            <StatusBar
                backgroundColor={BACK_COLOR}
                barStyle={store.theme ? 'light-content' : 'dark-content'}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>
                <Image source={{ uri: URL }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                <Text style={{ fontSize: 20, marginLeft: 10, fontFamily: 'rayjoe', color: FONT_COLOR }}>Anonymous</Text>
            </View>
            <Followed
                onNavi={(path) => navigation.navigate(path)}
                color={FONT_COLOR}
            />
            <View style={{ marginTop: 30, paddingHorizontal: 30, height: HEIGHT(200), justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, color: FONT_COLOR }}>Dark Theme</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#f1f1f1" }}
                        thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('visit')}>
                        <Text style={{ fontSize: 20, color: FONT_COLOR }}>visits(graph)</Text>
                    </TouchableOpacity>
                    <FontAwesome5 name={'history'} size={20} color={FONT_COLOR} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('liked')}>
                        <Text style={{ fontSize: 20, color: FONT_COLOR }}>Read Later(sort by time)</Text>
                    </TouchableOpacity>
                    <FontAwesome5 name={'bookmark'} size={20} color={FONT_COLOR} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => {
                        newsStore.signOut()
                    }}>
                        <Text style={{ fontSize: 20, color: FONT_COLOR }}>LogOut</Text>
                    </TouchableOpacity>
                    <MaterialIcons name={'logout'} size={20} color={FONT_COLOR} />
                </View>
            </View>
        </View>
    )
}
