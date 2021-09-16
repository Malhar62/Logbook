import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, Image,
    View, Switch, TouchableOpacity
} from 'react-native';
import { HEIGHT, WIDTH } from '../../Screens/Functions';
import { store } from '../../MST/store'
import { newsStore } from '../../MST/newsStore';


export default function Followed({ onNavi, color }) {

    function CommonText({ data, path }) {
        return (
            <TouchableOpacity onPress={() => { onNavi(path) }}>
                <Text style={[styles.txt, { color: color }]}>{data}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ width: '100%', alignSelf: 'center', marginTop: 20, paddingHorizontal: 30 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <View style={{}}>
                    <CommonText data={'9'} />
                    <CommonText data={'categories'} path={'category'} />
                </View>
                <View>
                    <CommonText data={newsStore.likes.length} />
                    <CommonText data={'Liked'} path={'liked'} />
                </View>
                <View>
                    <CommonText data={newsStore.visited.length} />
                    <CommonText data={'News Read'} path={'visit'} />
                </View>

            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: color, height: HEIGHT(20) }}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    txt: {
        fontSize: 20, textAlign: 'center'
    }
})