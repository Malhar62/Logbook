import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity,
    Text,
    useColorScheme, TextInput,
    View, Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
        width: '100%', height: 60, backgroundColor: '#524ae8'
    },
    main2: {
        flexDirection: 'row', marginTop: 15, position: 'absolute'
    },
    main3: {
        marginLeft: 5, width: 30, height: 60
    },
    main4: { alignSelf: 'center', width: 320, height: 60 },
    txt: { fontSize: 20, color: '#fff', textAlign: 'center' }
})