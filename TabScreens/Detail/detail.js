import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    ImageBackground, Image, TouchableOpacity, Button,
    View, Animated
} from 'react-native';
import { HEIGHT } from '../../Screens/Functions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { store } from '../../MST/store'
import { newsStore } from '../../MST/newsStore'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ALVINA, RAY, KALMA, SIGMA } from '../../Constants';

export default function DetailScreen({ navigation, route }) {
    let array = route.params.data;
    let index = route.params.index;
    let TYPE = route.params.type;
    let MODE = route.params.mode;
    const [count, setCount] = useState(index)
    const [item, setItem] = useState(array[index])
    const [col, setCol] = useState('maroon')
    const [name, setName] = useState('hearto')
    const length = useRef(new Animated.Value(0)).current
    const [process, setProcess] = useState('')
    useEffect(() => {
        giveDetail(item, 'N')
        giveDetail(item, 'C')
    }, [count])
    useEffect(() => {
        if (MODE == 'home') {
            addToStore()
        }
    }, [])
    const BACK_COLOR = store.theme ? '#101010' : '#fff'
    const FONT_COLOR = store.theme ? '#fff' : '#3d3d3d'

    function addToStore() {
        console.log('--' + item.title)
        var info = { ...array[count] }
        newsStore.addToVisited({ info, type: TYPE })
    }

    function Top({ data }) {
        return (
            <View style={{ height: HEIGHT(60), alignItems: 'center', width: '100%', flexDirection: 'row' }}>
                <View style={{ position: 'absolute', left: 5 }}>
                    <MaterialIcons name='arrow-back-ios' color={FONT_COLOR} size={20} onPress={() => navigation.goBack()} />
                </View>
                <View style={{ width: '100%' }}>
                    <Text style={{ textAlign: 'center', alignSelf: 'center', fontSize: 18, fontFamily: 'rayjoe', color: FONT_COLOR }}>{data}</Text>
                </View>
            </View>
        )
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

    function onSwipeLeft() {
        if (count > 0) {
            setCount(count - 1)
            console.log('left')
            setItem(array[count - 1])
            var info = { ...array[count - 1] }
            newsStore.addToVisited({ info, type: TYPE })
        }
    }

    function onSwipeRight() {
        if (count < (array.length - 1)) {
            setCount(count + 1)
            console.log('right')
            setItem(array[count + 1])
            var info = { ...array[count + 1] }
            newsStore.addToVisited({ info, type: TYPE })
        }
    }
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };
    function BUTTON() {
        return (
            <View style={{ marginVertical: 10, paddingHorizontal: 10, width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                <View>
                    {(count > 0) &&
                        <Button
                            title='< BACK'
                            color='navy'
                            onPress={() => onSwipeLeft()}
                        />
                    }
                </View>
                <View>
                    {(count < array.length - 1) && <Button
                        title='NEXT >'
                        color='gold'
                        onPress={() => onSwipeRight()}
                    />}
                </View>
            </View>
        )
    }
    function giveDetail(data, type) {

        var count = 0;
        newsStore.likes.forEach(item => {
            if (item.title == data.title && item.author == data.author) {
                count++;
            }
        })
        if (count == 0) {
            if (type == 'N') {
                setName('hearto')
            } else {
                setCol('maroon')
            }
        } else {
            if (type == 'C') {
                setCol('pink')
            } else {
                setName('heart')
            }
        }
    }
    const fading = () => {
        // Will change length value to 1 in 5 seconds
        Animated.timing(length, {
            toValue: 30,
            duration: 1000,
            useNativeDriver: false
        }).start();
        setTimeout(() => {
            Animated.timing(length, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            }).start();
        }, 2000)
    };
    return (
        <View style={{ flex: 1, backgroundColor: BACK_COLOR }}>
            <StatusBar
                backgroundColor={BACK_COLOR}
                barStyle={store.theme ? 'light-content' : 'dark-content'}
            />
            <Top data={item.source.name == null ? 'No sources' : item.source.name} />
            {MODE == 'home' ? <BUTTON /> : <View />}
            <GestureRecognizer
                onSwipeLeft={(state) => onSwipeLeft()}
                onSwipeRight={(state) => onSwipeRight()}
                config={config}
                style={{
                    flex: 1,
                }}
            >
                <Image source={{ uri: item.urlToImage }} style={{ height: HEIGHT(200), width: '100%' }} />
                <View >
                    <Text style={{ fontSize: 18, color: FONT_COLOR }}>{item.title}</Text>
                    <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                        <View style={{ height: HEIGHT(55), justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: FONT_COLOR }}>
                            <Text style={{ fontSize: 18, color: FONT_COLOR }}>{item.author}</Text>
                            <Text style={{ fontSize: 18, color: FONT_COLOR }}>{DATE(item.publishedAt.substring(0, 10))}  {item.publishedAt.substring(11, 16)}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, color: FONT_COLOR }}>{item.description}</Text>
                        </View>
                    </View>
                </View>
                {MODE == 'home'
                    ? <View style={{ position: 'absolute', right: 30, bottom: 30 }}>
                        <AntDesign
                            name={name}
                            color={col}
                            size={30}
                            onPress={() => {
                                var count = 0;
                                newsStore.likes.forEach(element => {
                                    if (element.title == item.title && element.author == item.author) {
                                        count++;
                                    }
                                })
                                if (count == 0) {
                                    newsStore.addToLike({ item, type: TYPE })
                                    console.log('top')
                                    setProcess('Added to Bookmark !')
                                    fading()
                                } else {
                                    newsStore.deleteFromLike(item)
                                    console.log('bottom')
                                    fading()
                                    setProcess('Removed from Bookmark !')
                                }
                                giveDetail(item, 'N')
                                giveDetail(item, 'C')
                            }}
                        />
                    </View> : <View></View>

                }
            </GestureRecognizer>
            <Animated.View style={[styles.ANIM, { height: length, }]}>
                <Text style={{ color: '#fff', fontSize: 25, fontFamily: ALVINA, marginLeft: 7 }}>{process}</Text>
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    ANIM: {
        position: 'absolute', bottom: 0, right: 0, left: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        justifyContent: 'center',
    }
})
/**
 * {"source":{"id":null,"name":"NDTV News"},
 * "author":"Ajay Pal Singh","title":"\"With Covid, Things Are Very Uncertain\": Virat Kohli On Cancelled 5th Test | Cricket News - NDTVSports.com",
 * "description":"Virat Kohli opened up about the cancelled Manchester Test match and said with Covid in place, things are very uncertain.",
 * "url":"https://sports.ndtv.com/cricket/with-covid-things-are-very-uncertain-virat-kohli-on-cancelled-5th-test-2540201",
 * "urlToImage":"https://c.ndtvimg.com/2021-08/rlm5e8_virat-kohli-afp_625x300_28_August_21.jpg",
 * "publishedAt":"2021-09-14T06:50:55Z",
 * "content":"Virat Kohli arrived in Dubai on Sunday ahead of the resumption of the Indian Premier League (IPL) 2021 along with his Royal Challengers Bangalore (RCB) teammate Mohammed Siraj. After landing in Dubai… [+1275 chars]"},
 */