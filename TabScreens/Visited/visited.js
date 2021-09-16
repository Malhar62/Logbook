import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, FlatList, Image,
    useColorScheme, Dimensions,
    View, TouchableOpacity
} from 'react-native';
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native"
import { store } from '../../MST/store'
import { newsStore } from '../../MST/newsStore';
import { HEIGHT, WIDTH } from '../../Screens/Functions';
import SavedHeader from '../Detail/SavedHeader';

export default function VisitedScreen() {

    const BACK_COLOR = store.theme ? '#101010' : '#fff'
    const FONT_COLOR = store.theme ? '#fff' : '#3d3d3d'
    const navigation = useNavigation();

    function Insider({ item, index }) {
        function text_width(data) {
            var result = data.length * 10;
            return result;
        }
        function DATE(info) {
            let month = ['empty', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
            var num = info.length;
            if (info[5] == '0') {
                var result = info[num - 2] + info[num - 1] + ' ' + month[info[6]] + ' ' + info[0] + info[1] + info[2] + info[3];
                return result;
            } else {
                var str2 = info[6];
                var str = '1'.concat(str2)
                var result1 = info[num - 2] + info[num - 1] + ' ' + month[str] + ' ' + info[0] + info[1] + info[2] + info[3];
                return result1;
            }
        }
        return (
            <TouchableOpacity onPress={() => { }}>
                <View style={{ width: '100%', height: HEIGHT(120), flexDirection: 'row', marginHorizontal: 5, marginTop: 10 }}>
                    <View>
                        <Image
                            source={{ uri: item.urlToImage == null ? URL : item.urlToImage }}
                            style={{ height: HEIGHT(120), width: WIDTH(120), borderRadius: 10 }}
                        />
                    </View>
                    <View style={{ justifyContent: 'space-between', width: Dimensions.get('screen').width - WIDTH(120), marginLeft: 5 }}>
                        <View>
                            <Text numberOfLines={3} style={{ fontSize: 15, color: FONT_COLOR }}>{item.title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{
                                backgroundColor: '#a89fde',
                                width: text_width(item.type), height: HEIGHT(25), borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ color: '#fff' }}>{item.type.toUpperCase()}</Text>
                            </View>
                            <View style={{
                                width: WIDTH(130), height: HEIGHT(25), justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ marginLeft: 7, color: FONT_COLOR }}>{DATE(item.publishedAt.substring(0, 10))}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: BACK_COLOR }}>
            <StatusBar
                backgroundColor={BACK_COLOR}
                barStyle={store.theme ? 'light-content' : 'dark-content'}
            />
            <SavedHeader
                COLOR={BACK_COLOR}
                TXT={FONT_COLOR}
                title='READED NEWS'
                onNavi={() => navigation.goBack()}
            />
            <View style={{ height: HEIGHT(680) }}>
                <FlatList
                    data={newsStore.visited.toJSON()}
                    renderItem={({ item, index }) => (
                        <Insider item={item} index={index} />
                    )}
                    keyExtractor={(item, index) => 'index' + index.toString()}
                />
            </View>
        </View>
    )
}