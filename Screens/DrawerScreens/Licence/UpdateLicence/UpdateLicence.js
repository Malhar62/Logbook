import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity,
    Text,
    useColorScheme, TextInput,
    View, Button
} from 'react-native';
import HeaderCommon from '../../HeaderCommon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { store } from '../../../../MST/store';
export default function UpdateDetail({ navigation, route }) {
    const [input1, setInput1] = useState(route.params.obj.number1)
    const [input2, setInput2] = useState(route.params.obj.state1)
    const [input3, setInput3] = useState(route.params.obj.Country1)
    const [input4, setInput4] = useState(route.params.obj.exp1)
    return (
        <SafeAreaView>
            <HeaderCommon onNavi={() => navigation.goBack()} name='Update Licence Information' />
            <View elevation={5} style={styles.main}>
                <View style={styles.view}>
                    <Text style={styles.txt}>Licence Number</Text>
                    <TextInput
                        value={input1}
                        onChangeText={text => setInput1(text)}
                        style={styles.txtip}
                    />
                </View>

                <View style={styles.view}>
                    <Text style={styles.txt}>Expiry Date</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 15 }}>{route.params.obj.exp1}</Text>
                        <MaterialIcons name='date-range' size={24} style={styles.icon} />
                    </View>
                </View>

                <View style={styles.view}>
                    <Text style={styles.txt}>State</Text>
                    <TextInput
                        value={input2}
                        onChangeText={text => setInput2(text)}
                        style={styles.txtip}
                    />
                </View>

                <View style={styles.view}>
                    <Text style={styles.txt}>Country</Text>
                    <TextInput
                        value={input3}
                        onChangeText={text => setInput3(text)}
                        style={styles.txtip}
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {
                        let obj = {
                            number: input1,
                            exp: input4,
                            state: input2,
                            Country: input3,
                            index: route.params.obj.index
                        }
                        store.updateLicence(obj);
                        navigation.goBack();
                    }} >
                        <Text style={styles.txt2}>Save Licence Information</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
