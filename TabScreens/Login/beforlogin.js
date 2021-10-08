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
import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native"
import { HEIGHT, WIDTH } from '../../Screens/Functions';
import { newsStore } from '../../MST/newsStore';
export default function BeforeLogin() {
    const navigation = useNavigation()
    console.log(newsStore.isLogin)
    const Simple = () => (
        <Onboarding
            onDone={() => { navigation.navigate('newslogin') }}
            onSkip={() => { navigation.navigate('newslogin') }}
            pages={[
                {
                    backgroundColor: 'orange',
                    image: <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykcAXSrNtclmOmmPiroXi70B4smqBm8YTYg&usqp=CAU' }} style={styles.img} />,
                    title: 'Welcome',
                    subtitle: 'The fastest and latest news provider',
                },
                {
                    backgroundColor: '#fe6e58',
                    image: <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKbjPhs4hNPeNURBkmqTqK1iLt3Obx-pGfLg&usqp=CAU' }} style={styles.img} />,
                    title: 'Read by category',
                    subtitle: 'Read newses on go from any category.',
                },
                {
                    backgroundColor: '#999',
                    image: <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFZ1YfBEcbXF1BvIi2ZIrUDoItQ40fyx2HQ&usqp=CAU' }} style={styles.img} />,
                    title: 'Save to Read later',
                    subtitle: "track your activity and save liked newses",
                },
            ]}
        />
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <Simple />
        </View>
    )
}
const styles = StyleSheet.create({
    img: {
        width: WIDTH(250),
        height: HEIGHT(200)
    }
})