
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar, Dimensions,
    StyleSheet, TouchableOpacity,
    Text,
    useColorScheme, TextInput,
    View, Button, FlatList, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import { store } from '../../../../MST/store';
export default function TopBox({ }) {
    const [flag, setFlag] = React.useState(false)
    const [flag1, setFlag1] = React.useState(false)
    const [remember, setRemember] = useState(false)
    const [des, setDes] = useState(store.desp)
    const [sub, setSub] = useState([])
    let cat = [
        {
            name: 'Patrolling', title: [
                { title: 'PatrolA' },
                { title: 'PatrolB' },
                { title: 'PatrolC' },
                { title: 'PatrolD' },
            ]
        }, {
            name: 'Developing', title: [
                { title: 'Develop A' },
                { title: 'Develop B' },
                { title: 'Develop C' },
                { title: 'Develop D' },
            ]
        }, {
            name: 'Designing', title: [
                { title: 'Design A' },
                { title: 'Design B' },
                { title: 'Design C' },
                { title: 'Design D' },
            ]
        }, {
            name: 'Marketing', title: [
                { title: 'marketing  A' },
                { title: 'marketing  B' },
                { title: 'marketing  C' },
                { title: 'marketing  D' },
            ]
        }, {
            name: 'Drawing', title: [
                { title: 'Draw A' },
                { title: 'Draw B' },
                { title: 'Draw C' },
                { title: 'Draw D' },
            ]
        }, {
            name: 'Supervising', title1: [
                { title: 'supervise A' },
                { title: 'supervise B' },
                { title: 'supervise C' },
                { title: 'supervise D' },
            ]
        }]
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 7 }}>Baxter International</Text>
                <View style={{ marginTop: 30 }}>
                    <View style={styles.view1}>
                        <TouchableOpacity onPress={() => {
                            setFlag1(false); setFlag(!flag)
                        }}><Text style={{ fontSize: 15, color: 'grey' }}>{store.categories}</Text></TouchableOpacity>
                        <AntDesign name={flag ? 'down' : 'up'} size={15} style={styles.icon} />
                    </View>
                    {flag && <FlatList
                        data={cat}
                        renderItem={({ item, index }) => (
                            <View style={styles.view2}>
                                <TouchableOpacity onPress={() => {
                                    setFlag(!flag); setSub(item.title);
                                    store.setCategory(item.name)
                                    console.log(item.title[0].title)
                                    for (var i = 0; i < 4; i++) {
                                        if (store.tasks != item.title[i].title) {
                                            store.setTask('Tasks');
                                        }
                                    }

                                }}>
                                    <Text style={styles.txt}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.name}
                    />}
                </View>
                <View style={{ marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 8, }}>
                        <TouchableOpacity onPress={() => { setFlag(false); setFlag1(!flag1) }}>
                            <Text style={{ fontSize: 15, color: 'grey' }}>{store.tasks}</Text></TouchableOpacity>
                        <AntDesign name={flag1 ? 'down' : 'up'} size={15} style={styles.icon} />
                    </View>
                    {flag1 && <FlatList
                        data={sub}
                        renderItem={({ item, index }) => (
                            <View style={styles.inside}>
                                <TouchableOpacity onPress={() => { setFlag1(!flag1); store.setTask(item.title) }}>
                                    <Text style={{ fontSize: 15, marginLeft: 5 }}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.title}
                    />}
                </View>
                <View style={{ marginTop: 40, marginHorizontal: 8 }}>
                    <TouchableOpacity onPress={() => setFlag(!flag)}>
                        <Text style={styles.txt}>Description</Text>
                    </TouchableOpacity>
                    <View style={{ height: 120, borderWidth: 0 }} >
                        <TextInput
                            value={des}
                            onPressIn={() => { setFlag(false); setFlag1(false) }}
                            onChangeText={text => { setDes(text); store.setDesp(des) }}
                            multiline
                            numberOfLines={4}
                            onSubmitEditing={Keyboard.dismiss}
                            style={{ fontSize: 15 }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        disabled={false}
                        value={remember}
                        onValueChange={(newValue) => {
                            setRemember(newValue);
                        }}
                    />
                    <Text style={{ marginTop: 5 }}>Should show on top? </Text>
                </View>
                <View style={{ marginLeft: 8, marginTop: 10 }}>
                    <Text style={{ fontSize: 20 }}>Add Files</Text>
                    <Text style={{ fontSize: 18, color: 'grey' }}>Audio,Image or Files upto 10 MB only</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    view1: { flexDirection: 'row', marginHorizontal: 8, borderBottomColor: 'grey', borderBottomWidth: 1, height: 30, borderBottomColor: 'grey' },

    view2:
        { marginHorizontal: 7, marginTop: 5, borderLeftWidth: 2 },
    txt:
        { fontSize: 15, marginLeft: 5, color: 'grey' },
    inside:
        { marginHorizontal: 7, marginTop: 5, borderLeftWidth: 2 },
    icon:
        { position: 'absolute', right: 0 },
})