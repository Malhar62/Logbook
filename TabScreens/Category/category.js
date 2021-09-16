


import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, FlatList, Image, ImageBackground, TouchableOpacity, Dimensions, StatusBar } from "react-native"
import { WIDTH, HEIGHT } from '../../Screens/Functions';
import { DataList } from './DataList'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation, useRoute } from "@react-navigation/native"
import { store } from '../../MST/store'

export default function CategoryScreen() {

    const navigation = useNavigation()
    const [list, setList] = React.useState(DataList)
    const [filter, setFilter] = React.useState([])
    const [text, setText] = React.useState('')

    function Insider({ item, index }) {
        return (
            <View style={{
                marginTop: 20, marginHorizontal: WIDTH(7)
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('home', { type: item.name })
                }}>
                    <ImageBackground source={{ uri: item.img_url }} style={{
                        width: (Dimensions.get('screen').width / 3) - WIDTH(15), height: HEIGHT(150), borderRadius: 10,
                        justifyContent: 'center', alignItems: 'center', overflow: 'hidden'
                    }}>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 20 }}>{item.title}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }
    function searching(data) {
        var str = data.toUpperCase()
        var array = []
        list.forEach((item) => {
            if (item.title.toUpperCase().includes(str)) {
                array.push(item)
            }
        });
        setFilter(array);
        setText(data)
    }
    const BACK_COLOR = store.theme ? '#101010' : '#fff'
    const FONT_COLOR = store.theme ? '#fff' : '#3d3d3d'

    return (
        <View style={{ flex: 1, backgroundColor: BACK_COLOR }}>
            <StatusBar
                backgroundColor={BACK_COLOR}
                barStyle={store.theme ? 'light-content' : 'dark-content'}
            />
            <View style={{ width: '100%', height: HEIGHT(60), borderBottomWidth: 1, borderBottomColor: '#f1f1f1', flexDirection: 'row' }}>
                <TextInput
                    value={text}
                    onChangeText={data => searching(data)}
                    placeholder='News Category'
                    placeholderTextColor='#a89fde'
                    style={{ width: Dimensions.get('screen').width - WIDTH(50), height: HEIGHT(60), fontSize: 18, paddingLeft: 10 }}
                />
                <View style={{ width: WIDTH(50), height: HEIGHT(60), justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name='search' size={20} color={FONT_COLOR} />
                </View>
            </View>
            <FlatList
                key={'1'}
                numColumns={3}
                data={text == '' ? list.slice() : filter.slice()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <Insider item={item} index={index} />
                )}
                keyExtractor={(item, index) => 'index' + index.toString()}
            />
        </View>
    )
}