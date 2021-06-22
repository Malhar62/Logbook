import React from 'react';
import {
    StyleSheet, TouchableOpacity,
    View, Button, FlatList, Text
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from './Company/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CommonSelection({ Array, handleSelect, handleCancel, flag }) {
    const [ind, setInd] = React.useState(null);

    return (
        <View>
            <View elevation={5} style={styles.main}>
                <FlatList
                    data={Array}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <View style={[styles.view,
                        {
                            borderBottomWidth: flag == 'JOB' ? index != (Array.length - 1) ? 1 : 0 : 0,
                            borderBottomColor: '#c7ccd4'
                        }]}>
                            <View style={styles.extra}>
                                <Text style={styles.txt1}>{item.title}</Text>
                                <Text style={styles.txt2}>{item.text}</Text>
                            </View>
                            <View style={styles.radio}>
                                <RadioButton
                                    value={item.title}
                                    color='blue'
                                    status={index == ind ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setInd(index)
                                    }}
                                />
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.title}
                />
                <View>
                    <View style={styles.view1}>
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (ind !== null) {
                                        handleSelect(Array[ind].title)
                                    } else {
                                        alert('Select a Company')
                                    }
                                }}
                            ><Text style={styles.buttontxt}>Select</Text></TouchableOpacity>
                        </View>
                        <View style={[styles.button, { backgroundColor: '#fff', borderColor: 'grey', borderWidth: 1 }]}>
                            <TouchableOpacity
                                onPress={() => handleCancel()}
                            ><Text style={[styles.buttontxt, { color: 'grey' }]}>Cancel</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ height: 20 }}></View>
            </View>
        </View>
    );
}
