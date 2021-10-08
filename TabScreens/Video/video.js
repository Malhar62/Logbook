import React, { useEffect, useState, useRef } from 'react';
import {
    StatusBar,
    Dimensions, Button,
    View, FlatList, Animated, StyleSheet, TouchableOpacity
} from 'react-native';
import {
    BarChart,
    PieChart,
} from "react-native-chart-kit";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native"
import { newsStore } from '../../MST/newsStore'
import { store } from '../../MST/store'
import { HEIGHT, WIDTH } from '../../Screens/Functions';
import { DataList } from '../Category/DataList';
import { colorList } from './Colors'
import { pieData } from './piechartdata';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function VideoScreen() {
    // const widthAndHeight = 250
    // const series = [1, 1, 1, 1, 1]
    // const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']
    const [col, setCol] = useState('rgba(59, 117, 65, 1)')
    const [method, setMethod] = useState('BAR')
    const [load, setLoad] = useState(null)
    const [theme, setTheme] = useState(null)
    const BACK_COLOR = theme ? '#101010' : '#fff'
    const FONT_COLOR = theme ? '#fff' : '#3d3d3d'
    const length = useRef(new Animated.Value(0)).current
    const isFocused = useIsFocused()
    const half_width = Dimensions.get('screen').width / 2;
    const half_height = Dimensions.get('screen').height / 2;
    const data = {
        labels: [DataList[0].name, DataList[1].name, DataList[2].name, DataList[3].name, DataList[4].name, DataList[5].name, DataList[6].name, DataList[7].name, DataList[8].name],
        datasets: [
            {
                data: [Finder(DataList[0].name), Finder(DataList[1].name), Finder(DataList[2].name), Finder(DataList[3].name), Finder(DataList[4].name), Finder(DataList[5].name), Finder(DataList[6].name), Finder(DataList[7].name), Finder(DataList[8].name)]
            }
        ]
    };
    const pieData = [
        {
            name: DataList[0].name,
            read: Finder(DataList[0].name),
            color: 'red',
            legendFontColor: FONT_COLOR,
            legendFontSize: 15
        },
        {
            name: DataList[1].name,
            read: Finder(DataList[1].name),
            color: 'pink',
            legendFontColor: FONT_COLOR,
            legendFontSize: 15
        },
        {
            name: DataList[2].name,
            read: Finder(DataList[2].name),
            color: 'yellow',
            legendFontColor: FONT_COLOR,
            legendFontSize: 15
        },
        {
            name: DataList[3].name,
            read: Finder(DataList[3].name),
            color: 'blue',
            legendFontColor: FONT_COLOR,
            legendFontSize: 15
        },
        {
            name: DataList[4].name,
            read: Finder(DataList[4].name),
            color: 'maroon',
            legendFontColor: FONT_COLOR,
            legendFontSize: 15
        },
        {
            name: DataList[5].name,
            read: Finder(DataList[5].name),
            color: 'green',
            legendFontColor: FONT_COLOR,
            legendFontSize: 15
        }, {
            name: DataList[6].name,
            read: Finder(DataList[6].name),
            color: 'cyan',
            legendFontColor: FONT_COLOR,
            legendFontSize: 15
        }, {
            name: DataList[7].name,
            read: Finder(DataList[7].name),
            color: '#f1f1f1',
            legendFontColor: FONT_COLOR,
            legendFontSize: 15
        }, {
            name: DataList[8].name,
            read: Finder(DataList[8].name),
            color: '#fff',
            legendFontColor: FONT_COLOR,
            legendFontSize: 15
        }
    ];
    const [first, setFirst] = useState(data)
    const [second, setSecond] = useState(pieData)

    useEffect(() => {
        if (isFocused) {
            setLoad(true)
            setFirst(data)
            setSecond(pieData)
            setTheme(store.theme)
            setLoad(false)
        }
    }, [isFocused])
    function Finder(text) {
        var count = 0;
        newsStore.visited.forEach(item => {
            if (item.type.toLowerCase() == text.toLowerCase()) {
                count++;
            }
        })
        return count;
    }
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0.2,
        backgroundGradientTo: "#f1f1f1",
        backgroundGradientToOpacity: 0.2,
        color: (opacity = 1) => col,
        strokeWidth: 5, // optional, default 3
        barPercentage: 1,
        useShadowColorFromDataset: false // optional
    };
    function changing() {
        Animated.timing(length, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false
        }).start();
        setTimeout(() => {
            Animated.timing(length, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: false
            }).start();
        }, 2100)
    }
    //https://corona.dnsforfamily.com/graph.png?c=US
    return (
        <Animated.View style={{
            flex: 1, backgroundColor: BACK_COLOR, justifyContent: 'center', alignItems: 'center'
        }}>
            {(load == false) && <Animated.View style={[{
                height: 50, width: 50,
                transform: [
                    {
                        translateX: length.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, (-half_width / 1.2)]
                        })
                    },
                    {
                        translateY: length.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, (half_height / 1.2)]
                        })
                    },
                    {
                        scale: length.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 3]
                        })
                    }

                ]
            },
            styles.icon]}>
                <AntDesign
                    name={method == 'PIE' ? 'barchart' : 'piechart'}
                    color={"#fff"}
                    size={30}
                    onPress={() => {
                        var Name = method;
                        setMethod('nop')
                        changing()
                        setTimeout(() => {
                            if (Name == 'PIE') {
                                setMethod('BAR')
                            } else {
                                setMethod('PIE')
                            }
                            setFirst(data)
                            setSecond(pieData)
                        }, 3800)
                    }} />
            </Animated.View>}
            {(method == 'BAR') && (load == false) && <View>
                <BarChart
                    data={first}
                    width={Dimensions.get('screen').width}
                    height={400}
                    yAxisLabel="No."
                    chartConfig={chartConfig}
                    verticalLabelRotation={90}
                />
                <View style={{ width: '100%', marginTop: 30, alignSelf: 'center' }}>
                    <FlatList
                        horizontal={true}
                        data={colorList}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setCol(item.short)}>

                                <View style={{
                                    width: WIDTH((Dimensions.get('screen').width / colorList.length) - 10),
                                    height: HEIGHT(30),
                                    marginLeft: 5,
                                    backgroundColor: item.short,
                                }}>
                                </View>
                                <View style={{
                                    marginLeft: 5,
                                    height: 10, borderBottomWidth: item.short == col ? 2 : 0,
                                    borderBottomColor: FONT_COLOR
                                }}>

                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => 'index' + index.toString()}
                    />
                </View>
            </View>}
            {(method == 'PIE') && (load == false) &&
                <View style={{ height: HEIGHT(400) }}>
                    <PieChart
                        data={second}
                        width={Dimensions.get('screen').width}
                        height={300}
                        chartConfig={chartConfig}
                        accessor={"read"}
                        backgroundColor={"transparent"}
                        paddingLeft={"15"}
                        center={[10, 10]}
                        absolute
                    />
                </View>
            }
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    icon: {
        position: 'absolute', right: 10, top: 0,
        backgroundColor: 'maroon', borderRadius: 5, justifyContent: 'center', alignItems: 'center'
    }
})
