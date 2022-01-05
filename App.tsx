import { useState, useEffect } from 'react';
import {StatusBar, Text} from 'react-native';
import Colors from './src/constants/Colors';
import useColorScheme from './src/hooks/useColorScheme';
import { useSelector } from 'react-redux';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';

import AuthNavigator from './src/Navigation/AuthNavigator'
import BottomTabNavigator from './src/Navigation/BottomTabNavigator'
import StartScreen from './src/Screens/Auth/StartScreen'


const App = props => {

  const isAuth = useSelector(state => !!state.auth.token)
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin)

  return (
    <NavigationContainer>
      { isAuth && <BottomTabNavigator /> }
      { !isAuth && didTryAutoLogin && <AuthNavigator />}
      { !isAuth && !didTryAutoLogin && <StartScreen/>}
    </NavigationContainer>
  )
}

export default App
