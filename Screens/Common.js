

import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Button, TextInput, Image, Dimensions, SafeAreaView, TouchableOpacity
} from 'react-native';
import { HEIGHT, LoginTopHeight, logoDimension, WIDTH } from '../Screens/Functions';

export default function Common() {

  return (
    <View style={styles.main}>
      <View>
        <Image source={require('../Components/logo.png')} style={{ width: WIDTH(70), height: HEIGHT(70), alignSelf: 'center' }} />
        <Text style={styles.txt}>LOGBOOKS PRO</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    width: Dimensions.get('window').width, height: HEIGHT(320), backgroundColor: '#524ae8', justifyContent: 'center'
  }, txt: {
    fontSize: 30, color: 'white', fontFamily: 'serif-monospace', marginTop: 10, alignSelf: 'center'
  }
})