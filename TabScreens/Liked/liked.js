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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { commonstyles } from '../Profile/commonstyles';
import Modal from "react-native-modal";
import { DataList } from '../Category/DataList'
import { ALVINA } from '../../Constants/index'

export default function LikedScreen({ route }) {

    const BACK_COLOR = store.theme ? '#101010' : '#fff'
    const FONT_COLOR = store.theme ? '#fff' : '#3d3d3d'
    const navigation = useNavigation();
    const [list, setList] = useState([])
    const [isModalVisible, setModalVisible] = useState(false);
    const isFocussed = useIsFocused()

    useEffect(() => {
        if (isFocussed) {
            var DATA = route.params ? route.params.data : newsStore.likes.toJSON()
            setList(DATA)
        }
    }, [isFocussed])

    function Insider({ item, index }) {
        function text_width(data) {
            var result = (data.length) * 10;
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
            <TouchableOpacity onPress={() => navigation.navigate('detail', { data: list, index, type: item.type, mode: 'visit' })}>
                <View style={commonstyles.TOP}>
                    <View>
                        <Image
                            source={{ uri: item.urlToImage == null ? URL : item.urlToImage }}
                            style={{ height: HEIGHT(120), width: WIDTH(120), borderRadius: 10 }}
                        />
                    </View>
                    <View style={commonstyles.MED}>
                        <View>
                            <Text numberOfLines={3} style={{ fontSize: 15, color: FONT_COLOR }}>{item.title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{
                                backgroundColor: '#a89fde',
                                width: WIDTH(80), height: HEIGHT(25), borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ color: '#fff' }}>{item.type.toUpperCase()}</Text>
                            </View>
                            <View style={commonstyles.DT}>
                                <Text style={{ marginLeft: 7, color: FONT_COLOR }}>{DATE(item.publishedAt.substring(0, 10))}</Text>
                            </View>
                            <View style={{ height: HEIGHT(25), justifyContent: 'center', alignItems: 'center', position: 'absolute', right: WIDTH(10) }}>
                                <MaterialCommunityIcons
                                    name='delete-circle-outline'
                                    size={25}
                                    onPress={() => {
                                        newsStore.deleteFromLike(index)
                                        setList(newsStore.likes.toJSON())
                                    }}
                                />
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
                title='SAVED TO READ LATER'
                onNavi={() => navigation.goBack()}
                right={'yes'}
                onMode={() => setModalVisible(true)}
            />
            {(list.length == 0) ? <Text>Nothing Saved !</Text> :
                <View>
                    <FlatList
                        data={list}
                        renderItem={({ item, index }) => (
                            <Insider item={item} index={index} />
                        )}
                        keyExtractor={(item, index) => 'index' + index.toString()}
                    />
                </View>
            }
            <View style={{}}>
                <Modal
                    isVisible={isModalVisible}
                    onBackButtonPress={() => setModalVisible(false)}
                    onBackdropPress={() => setModalVisible(false)}
                    animationIn={'slideInUp'}
                    animationOut={'slideOutDown'}
                    backgroundColor='transparent'

                >
                    <View style={{ height: Dimensions.get('screen').height / 2, width: '100%', position: 'absolute', bottom: 0 }}>
                        <FlatList
                            numColumns={3}
                            data={DataList.slice()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    var array = [];
                                    let copy = [...list];
                                    copy.forEach(element => {
                                        if (element.type.toUpperCase() == item.name.toUpperCase()) {
                                            array.push(element)
                                        }
                                    })
                                    //setList(array)
                                    setModalVisible(false)
                                    navigation.push('liked', { data: array })
                                }}>
                                    <View style={{ backgroundColor: '#f1f1f1', borderRadius: 5, marginLeft: 10, marginTop: 10 }}>
                                        <Text style={{ fontSize: 30, fontFamily: ALVINA, textAlign: 'center', marginHorizontal: 5, marginVertical: 5 }}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => 'index' + index.toString()}
                        />
                    </View>
                </Modal>
            </View>
        </View>
    )
}