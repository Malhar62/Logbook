

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login/Login';
import Forgot from './Screens/Forgot/Forgot';
import Home from './Screens/Home/Home';
import {store} from './MST/store';
const Stack = createStackNavigator();

 function RootNavigation() {
      SplashScreen.hide();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Forgot' component={Forgot} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return <RootNavigation Store={store} />;
}

