import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView,
    Animated,
    StatusBar,
    StyleSheet,
    Text, ImageBackground,
    FlatList, TouchableOpacity,
    Image,
    View,
    Dimensions,
} from 'react-native';
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native"
import axios from 'axios';
import { HEIGHT, WIDTH } from '../../Screens/Functions';
import { store } from '../../MST/store'
import { URL } from './link'
import HomeHeader from './header';
import ALVINA from '../../Constants'
import Time from './time';

export default function HomeScreen({ route }) {
    const navigation = useNavigation();

    const [list, setList] = useState([])
    const [img, setImg] = useState(null)
    const [text, setText] = useState('')
    const [title, setTitle] = useState(route.params ? route.params.type : 'general')
    const [load, setLoad] = useState(false)
    const isFocused = useIsFocused()
    const scroll = React.useRef()
    const BACK_COLOR = store.theme ? '#101010' : '#fff'
    const FONT_COLOR = store.theme ? '#fff' : '#3d3d3d'
    const longines = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isFocused) {
            setLoad(true)
            funcky(route.params ? route.params.type : 'general')
            setTitle(route.params ? route.params.type : 'general')
            scroll.current.scrollToOffset({ animated: true, offset: 0 })
        }
    }, [isFocused])
    React.useEffect(() => {
        Animated.spring(longines, {
            toValue: 1,
            tension: 20,
            duration: 1000,
            useNativeDriver: true,
        }).start();
        setTimeout(() => {
            Animated.spring(longines, {
                toValue: 0,
                tension: 20,
                duration: 2000,
                useNativeDriver: true,
            }).start();
        }, 3000);
    }, []);
    var delayValue = 2000;


    function funcky(kind) {
        axios
            .get(
                `https://newsapi.org/v2//top-headlines?country=in&apiKey=cab817200f92426bacb4edd2373e82ef&category=${kind}`
            )
            .then(function (response) {
                // handle success
                console.log('****************************************************')
                setList(response.data.articles);
                //setImg(response.data.articles[0].urlToImage);
                //setText(response.data.articles[0].title)
            });
        setLoad(false)
    }

    const onViewRef = React.useRef((viewableItems) => {
        //console.log(viewableItems.viewableItems[0].item.title)
        setImg(viewableItems.viewableItems[0].item.urlToImage == null ? URL : viewableItems.viewableItems[0].item.urlToImage)
        setText(viewableItems.viewableItems[0].item.title)
        // Use viewable items in state or as intended
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })



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
            <TouchableOpacity onPress={() => navigation.navigate('detail', { data: list, index, type: title })}>
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
                                width: text_width(title), height: HEIGHT(25), borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ color: '#fff' }}>{title.toUpperCase()}</Text>
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
    const translateY = longines.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 1],
    });

    return (
        <View style={{ flex: 1, backgroundColor: BACK_COLOR }}>
            <StatusBar
                backgroundColor={BACK_COLOR}
                barStyle={store.theme ? 'light-content' : 'dark-content'}
            />
            <HomeHeader title={title} />

            {(load == false) ?
                <View>
                    <ImageBackground source={{ uri: img }} style={{ height: HEIGHT(250) }}>
                        <View style={{
                            height: HEIGHT(125),
                            width: '100%',
                            justifyContent: 'center',
                            position: 'absolute',
                            bottom: 0,
                            backgroundColor: 'rgba(52, 52, 52, 0.5)',
                            alignItems: 'center'
                        }}>
                            <Text style={{ color: '#fff', fontSize: 20 }}>{text}</Text>
                        </View>
                    </ImageBackground>
                    <View style={{ height: HEIGHT(380) }}>
                        <FlatList
                            ref={scroll}
                            data={list}
                            showsVerticalScrollIndicator={false}
                            onViewableItemsChanged={onViewRef.current}
                            viewabilityConfig={viewConfigRef.current}
                            renderItem={({ item, index }) => (
                                <Insider item={item} index={index} />
                            )}
                            keyExtractor={(item, index) => 'index' + index.toString()}
                        />
                    </View>
                </View>
                : <Text>Loading...</Text>
            }
            <Animated.View
                style={{
                    backgroundColor: '#f1f1f1',
                    transform: [{ translateY }],
                    position: 'absolute',
                    alignSelf: 'center',
                    borderRadius: 5
                }}>
                <Text style={{ fontSize: 18, marginHorizontal: 5, marginVertical: 5, fontFamily: ALVINA }}>{Time()}</Text>
            </Animated.View>
        </View>
    )
}