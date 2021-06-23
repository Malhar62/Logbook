import React from 'react';
import {
    SafeAreaView,
    StyleSheet, TouchableOpacity,
    Text,
    View, Button, FlatList
} from 'react-native';
import HeaderCommon from '../../HeaderCommon';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from './styles';
import { store } from '../../../../MST/store';
export default function LicenceDetail({ navigation }) {
    const [list, setList] = React.useState(store.licences.toJSON())
    React.useEffect(() => {
        navigation.addListener("focus", () => setList(store.licences.toJSON()))
    }, [navigation]);
    return (
        <SafeAreaView>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Licences' />
            <View elevation={5} style={styles.main}>
                <FlatList
                    data={list}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => {
                            let obj = { index, number1: item.number, exp1: item.exp, state1: item.state, Country1: item.Country };
                            navigation.navigate('UpdateDetail', { obj })
                        }}>
                            <View style={styles.view}>
                                <View>
                                    <Text style={[styles.txt, { color: 'black' }]}>{item.number}</Text>
                                    <Text style={styles.txt}>expires on : {item.exp}</Text>
                                    <Text style={styles.txt}>registered at : {item.state},{item.Country}</Text>
                                </View>
                                <View style={styles.icon}>
                                    <AntDesign name='arrowright' size={20} color='grey' />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.exp}
                />
            </View>
        </SafeAreaView>
    );
}
