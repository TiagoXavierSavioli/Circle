/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { StyleSheet} from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';

import { useRoute } from '@react-navigation/core';
 
import {HeaderHome, HeaderBack, HeaderConfig} from '../components/Headers/index' 
import Colors from '../constants/Colors';
 
import useColorScheme from '../hooks/useColorScheme';

import ConfigScreen from '../Screens/Config';
import EditScreen from '../Screens/Config/edit'
import photoPickerScreen from '../Screens/Config/photoPicker';
import TermsOfUseScreen from '../Screens/Config/TermsOfUse'
import PolicyScreen from '../Screens/Config/PrivacityPolicy'

import {ConfigParamList} from '../types';
 
const ConfigStack = createStackNavigator<ConfigParamList>();

export function ConfigScreenNavigator() {
  const colorScheme = useColorScheme();
  const route = useRoute()

  return (
    <ConfigStack.Navigator 
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
    }}
    >
      <ConfigStack.Screen
        name="EditScreen"
        component={ConfigScreen}
        options={{
          headerTitle: 'Settings',
          headerTitleAlign: 'left',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          headerTintColor: Colors[colorScheme].icons,
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          cardStyle: {backgroundColor: '#000'}
        }}
      />      
      <ConfigStack.Screen
        name="InfoScreen"
        component={EditScreen}
        options={{
          headerTitle: 'Edit',
          headerTitleAlign: 'left',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          headerTintColor: Colors[colorScheme].icons,
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          cardStyle: {backgroundColor: '#000', borderRadius: 30}
        }}
      />
      <ConfigStack.Screen
        name="TermsOfUseScreen"
        component={TermsOfUseScreen}
        options={{
          headerTitle: 'Terms of Use',
          headerTitleAlign: 'left',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 22},
          headerTintColor: Colors[colorScheme].icons,
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          cardStyle: {backgroundColor: '#000'}
        }}
      />
      <ConfigStack.Screen
        name="PolicyScreen"
        component={PolicyScreen}
        options={{
          headerTitle: 'Privacity Policy',
          headerTitleAlign: 'left',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          headerTintColor: Colors[colorScheme].icons,
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          cardStyle: {backgroundColor: '#000'}
        }}
      />

    </ConfigStack.Navigator>
  );
}
 const styles = StyleSheet.create({
    header: {
      fontFamily: 'red-hat-display-bold',
      fontWeight: 'bold',
      fontSize: 25,
    },
  });