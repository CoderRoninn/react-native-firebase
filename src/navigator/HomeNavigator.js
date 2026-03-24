import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import HomeScreen from '../screens/Home';
import { SCREENS } from '../consts/screens';

/**
 * HomeNavigator
 * Manages the authentication flow stacks (Register and Login)
 */

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName={SCREENS.REGISTER}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={SCREENS.REGISTER} component={RegisterScreen} />
            <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
            <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
