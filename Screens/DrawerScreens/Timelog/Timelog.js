

import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Logs from './Logs';
import About from './About';
import AddLog from './AddLog/AddLog';
import EditLog from './EditLog';
const Stack = createStackNavigator();

export default function Timelog({ navigation }) {

    return (
        <Stack.Navigator initialRouteName='Logs' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Logs" component={Logs} />
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='AddLog' component={AddLog} />
            <Stack.Screen name='EditLog' component={EditLog} />
        </Stack.Navigator>
    );
}
