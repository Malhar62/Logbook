import * as React from 'react';
import { Button, View, Dimensions ,Alert} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../DrawerScreens/DrawerContent';
import DashBoard from '../DrawerScreens/DashBoard/index';
import Shift from '../DrawerScreens/Shift';
import Licence from '../DrawerScreens/Licence';
import Timelog from '../DrawerScreens/Timelog';
const Drawer = createDrawerNavigator();

export default function Home({ navigation }) {
    function onNavi(path) {
        if (path !== 'Signout') {
            navigation.navigate(path)
        } else {
            Alert.alert(
                "SIGN OUT",
                "Confirm Signout?",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: "OK", onPress: () => navigation.navigate('Login')
                    }
                ]
            );
        }
    }

    return (
        <Drawer.Navigator drawerStyle={{
            width: 340,
        }}
            drawerContentOptions={{
                activeTintColor: 'red',
            }}
            drawerContent={() => <DrawerContent onNavi={(path) => onNavi(path)} />} >
            <Drawer.Screen name="DashBoard" component={DashBoard} />
            <Drawer.Screen name="Shift" component={Shift} />
            <Drawer.Screen name="Licence" component={Licence} />
            <Drawer.Screen name="Timelog" component={Timelog} />
        </Drawer.Navigator>
    );
}