import React from 'react';
import HeaderCommon from '../HeaderCommon';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartShift from './StartShift/StartShift';
import CurrentShift from './CurrentShift/CurrentShift';
import Company from './Company/Company';
import JobSite from './JobSite/JobSite';
const Stack = createStackNavigator();

export default function Shift({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='StartShift' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StartShift" component={StartShift} />
            <Stack.Screen name="JobSite" component={JobSite} />
            <Stack.Screen name="Company" component={Company} />
            <Stack.Screen name="CurrentShift" component={CurrentShift} />
        </Stack.Navigator>
    );
}