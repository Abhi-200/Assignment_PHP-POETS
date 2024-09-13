import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Drawer } from 'react-native-paper';
import MyDrawer from './Drawer';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import SendOTP from '../Screens/SendOTP';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false,
      statusBarColor: '#B61515'
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sendotp" component={SendOTP} />
      <Stack.Screen name="Sign" component={SignUpScreen} />
      <Stack.Screen name="Drawer" component={MyDrawer} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
