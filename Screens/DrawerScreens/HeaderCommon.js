import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity,
    Text,
    useColorScheme, TextInput,Dimensions,
    View, Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { headerHeight } from './Functions1';
export default function HeaderCommon({ navigation, onNavi, name }) {
    return (
        <View>
            <View style={styles.main1}>
                <View style={styles.main2}>
                    <View style={styles.main3}>
                        <Ionicons name='arrow-back' onPress={() => onNavi()} size={25} color='#fff' />
                    </View>
                    <View style={styles.main4}>
                        <Text style={styles.txt}>{name}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main1: {
        width: Dimensions.get('window').width, height: headerHeight(), backgroundColor: '#524ae8', justifyContent: 'center', alignSelf: 'center'
    },
    main2: {
        flexDirection: 'row', justifyContent: 'center'
    },
    main3: {
        marginLeft: 10, width: Dimensions.get('window').width-370, height: 60, justifyContent: 'center', position: 'absolute', left: 0
    },
    main4:
        { alignSelf: 'center', width: Dimensions.get('window').width-200, height: 60, justifyContent: 'center' },
    txt:
        { fontSize: 20, color: '#fff', textAlign: 'center' }
})