import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/Navigation/AppNavigator';

export default function App() {
    useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen
    }, []);
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};