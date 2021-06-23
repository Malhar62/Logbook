import React from 'react';
import LicenceDetail from './LicenceDetail/LicenceDetail';
import UpdateDetail from './UpdateLicence/UpdateLicence';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function Licence({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='LicenceDetail' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LicenceDetail" component={LicenceDetail} />
            <Stack.Screen name="UpdateDetail" component={UpdateDetail} />
        </Stack.Navigator>
    );
}