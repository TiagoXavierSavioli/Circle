import Colors from '../constants/Colors';
import { NavigationContainer, DefaultTheme, DarkTheme, BaseNavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import React, {useState, useMemo} from 'react';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList, AuthStackParamList} from '../types';
import AuthNavigator, { RegisterNavigator } from './AuthNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import BottomTabNavigator, {HomeScreenNavigator} from './BottomTabNavigator'
import { ConfigScreenNavigator } from './ConfigNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { MessageNavigator, NotificationNavigator} from './BottomTabNavigator';
import InitScreen from '../Screens/Auth/Init/InitScreen copy';
import LoginScreen from '../Screens/Auth/Login/LoginScreen';
import RegisterScreen from '../Screens/Auth/Register/UserScreen'
export default function Navigation({ colorScheme }: {colorScheme: ColorSchemeName} ) {

  const isAuth = useSelector(state => !!state.auth.token);
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer
    linking={LinkingConfiguration}
    theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       { isAuth && <BottomTabNavigator /> }
       { !isAuth && didTryAutoLogin && <AuthNavigator />}
    </NavigationContainer>

  );
}