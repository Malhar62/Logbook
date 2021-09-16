

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet, Keyboard,
  Text,
  useColorScheme,
  View, Dimensions
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login/Login';
import Forgot from './Screens/Forgot/Forgot';
import Home from './Screens/Home/Home';
import { store } from './MST/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './TabScreens/Home/home';
import CategoryScreen from './TabScreens/Category/category';
import ProfileScreen from './TabScreens/Profile/profile';
import VideoScreen from './TabScreens/Video/video';
import DetailScreen from './TabScreens/Detail/detail';
import LikedScreen from './TabScreens/Liked/liked'
import VisitedScreen from './TabScreens/Visited/visited';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { HEIGHT } from './Screens/Functions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function RootNavigation() {
  SplashScreen.hide();
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name='Forgot' component={Forgot} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
};
function TabNavigation({ }) {
  SplashScreen.hide();
  function CustomTab({ state, descriptors, navigation }) {
    let icons = ['home', 'videocam', 'category', 'info-outline']
    const [color, setColor] = useState('#f1f1f1')
    useEffect(() => {
      setColor(store.theme ? '#101010' : '#f1f1f1')
    }, [store.theme])
    return (
      <View key={Math.random()}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: color,
            width: '100%',
            height: HEIGHT(50),
            bottom: 0,
            right: 0, left: 0,
            position: 'absolute',
            justifyContent: 'space-between',
            paddingHorizontal: 10
          }}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            return (
              <View style={{
                width: Dimensions.get('screen').width / 4,
                height: HEIGHT(50),
                justifyContent: 'center',
                alignItems: 'center',
              }}
                key={index}>

                <MaterialIcons
                  name={icons[index]}
                  size={25}
                  color={isFocused ? 'blue' : 'grey'}
                  onPress={() => {
                    navigation.navigate(route.name);
                  }} />

              </View>
            );
          })}
        </View>
      </View>
    )
  }

  // const {index, routes} = props.navigation.dangerouslyGetState();
  // const currentRoute = routes[index].name;

  // console.log('current screen', currentRoute);
  const navigation = useNavigation()
  const state = navigation.dangerouslyGetState();
  let actualRoute = state.routes[state.index];
  while (actualRoute.state) {
    actualRoute = actualRoute.state.routes[actualRoute.state.index];
  }
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
      console.log("Keyboard Shown")
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
      console.log("Keyboard  Hidden")
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  function Comp(props) {
    if (actualRoute.name == 'detail' || actualRoute.name == 'visit' || actualRoute.name == 'liked' || keyboardStatus == "Keyboard Shown") {
      return null
    } else {
      return <CustomTab {...props} />
    }
  }

  return (
    <Tab.Navigator
      tabBar={(props) => Comp(props)}
      tabBarOptions={{
        keyboardHidesTabBar: true
      }}
    >
      <Tab.Screen name='last' component={Last} />
      <Tab.Screen name='video' component={VideoScreen} />
      <Tab.Screen name='category' component={CategoryScreen} />
      <Tab.Screen name='final' component={Final} />
    </Tab.Navigator>
  )
}
function Final() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='profile' component={ProfileScreen} />
      <Stack.Screen name='visit' component={VisitedScreen} />
      <Stack.Screen name='liked' component={LikedScreen} />
    </Stack.Navigator>
  )
}
function Last({ route }) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'home'}
    >
      <Stack.Screen name='home' component={HomeScreen} />
      <Stack.Screen name='detail' component={DetailScreen} />
    </Stack.Navigator>
  )
}
function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='main' component={TabNavigation} />
    </Stack.Navigator>
  )
}
export default function App() {

  return (
    <NavigationContainer >
      <MainNavigation Store={store} />
    </NavigationContainer>
  )
  // <RootNavigation Store={store} />for logbook app
}

