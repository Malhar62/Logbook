import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity,
    Text,
    useColorScheme, TextInput, Dimensions,
    View, Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { headerHeight } from './Functions1';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function HeaderCommon({ navigation, onNavi, name,extra,onEdit }) {
    return (
        <View style={styles.main1}>
            <View style={{ position: 'absolute', left: 5 }}>
                <Ionicons name='arrow-back' onPress={() => onNavi()} size={25} color='#fff' />
            </View>
            <View>
                <Text style={styles.txt}>{name}</Text>
            </View>
            {extra=='yes' &&<View style={{position:'absolute',right:10}}>
                <MaterialIcons name='edit' size={20} color='#fff' onPress={()=>onEdit()}/>
            </View>}
        </View>
    );
}
const styles = StyleSheet.create({
    main1: {
        width: Dimensions.get('window').width, alignSelf: 'center', height: headerHeight(), backgroundColor: '#524ae8', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    },
    txt:
        { fontSize: 20, color: '#fff', textAlign: 'center' }
})