import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity,
    Text, Image,
    useColorScheme, TextInput,
    View, Button, FlatList
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { URL, userData, DrawerData } from './Extradata';
export default function DrawerContent({ onNavi }) {

    const [ind, setInd] = React.useState(0)
    return (
        <View style={{ width: 500, height: '100%' }}>
            <View elevation={5} style={styles.main}>
                <Image source={{ uri: URL }}
                    style={styles.img} />
            </View>
            <View style={{ marginLeft: 20 }}>
                <Text style={{ marginTop: 10, fontSize: 30 }}>Shanice Barwick</Text>
                <View style={{ marginTop: 5 }}>
                    <FlatList
                        data={userData}
                        renderItem={({ item, index }) => (
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                {index != 1 ?
                                    <MaterialCommunityIcons name={item.name} size={25} color='grey' /> :
                                    <AntDesign name={item.name} size={25} color='grey' />}
                                <Text style={[styles.txt, { color: 'grey' }]}>{item.text}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.name}
                    />

                </View>
            </View>
            <View style={styles.view}></View>

            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={DrawerData}
                    renderItem={({ item, index }) => (
                        <View style={{ marginTop: 10, height: 40, width: 340, backgroundColor: index == ind ? '#d3e6e4' : '#fff', borderLeftWidth: index == ind ? 5 : 1, borderLeftColor: index == ind && 'navy' }}>
                            <TouchableOpacity onPress={() => onNavi(item.path)}>
                                <View style={styles.view1}>
                                    <MaterialCommunityIcons name={item.name} size={25} color={index == ind ? 'blue' : 'black'} />
                                    <Text style={[styles.txt, { color: index == ind ? 'blue' : 'black' }]}>{item.text}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.name}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        width: 110, height: 110, borderRadius: 55, marginTop: 25, marginLeft: 10
    },
    img:
    {
        width: 100, height: 100, borderRadius: 50, marginTop: 5, marginLeft: 5
    },
    view:
        { height: 2, width: 280, borderWidth: 0.7, marginLeft: 20, marginTop: 30, borderColor: 'grey' },
    view1: { marginLeft: 20, flexDirection: 'row', marginTop: 5 },
    txt: { marginLeft: 10, fontSize: 18 },

})