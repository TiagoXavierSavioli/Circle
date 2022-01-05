/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 import { StyleSheet, View, StatusBar, Text} from 'react-native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
 import React, {useEffect, useState} from 'react';
 import { HeaderHome, HeaderSearch, HeaderNotification, HeaderProfile, HeaderBack, HeaderConfig} from '../components/Headers/index' 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import HomeScreen from '../Screens/Home/HomeScreen';
 import MessagesScreen from '../Screens/Messages/MessagesScreen';
 import NotificationScreen from '../Screens/Home/NotificationScreen';
 import { NotifyNavigator } from './NotificationNavigator';
 import ProfileScreen from '../Screens/ViewProfile/ProfileScreen';
 import {
   BottomTabParamList,
   HomeParamList,
   AccountParamList,
   MessageParamList,
   NotificationParamList,
   CameraParamList
 } from '../types';
 import HeaderProfle from '../components/Headers/Profile/HeaderProfile';

const NotificationStack = createStackNavigator<NotificationParamList>();
const MessageStack = createStackNavigator<MessageParamList>();
const TabOneStack = createStackNavigator<HomeParamList>();
export function MessageNavigator(){
  const colorScheme = useColorScheme();
  return(
    <TabOneStack.Navigator>
      <MessageStack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{
          headerTitle: 'Messages',
          headerTransparent: false,
          headerTitleAlign: 'left',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25, color: '#000000'},
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
        }}
      />
      <MessageStack.Screen
        name="TalkScreen"
        component={NotificationScreen}
        options={{
          headerTitle: 'Talk',
          headerTransparent: true,
          headerTitleAlign: 'left',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          headerRight: () => (
            <HeaderNotification/>
          )
        }}
      />
      <MessageStack.Screen
        name="DetailsScreen"
        component={NotificationScreen}
        options={{
          headerTitle: 'Details',
          headerTransparent: true,
          headerTitleAlign: 'left',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          headerRight: () => (
            <HeaderNotification/>
          )
        }}
      />
    </TabOneStack.Navigator>
  )
}


export function NotificationNavigator(){
  const colorScheme = useColorScheme();
  return(
    <TabOneStack.Navigator>
      <NotificationStack.Screen
        name="NotificationScreen"
        component={NotifyNavigator}
        options={{
          headerTitle: 'Notifications',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0}
        }}
      />
      <NotificationStack.Screen
        name="DetailsScreen"
        component={NotificationScreen}
        options={{
          headerTitle: 'Details',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          headerRight: () => (
            <HeaderNotification/>
          )
        }}
      />
    </TabOneStack.Navigator>
  )

}