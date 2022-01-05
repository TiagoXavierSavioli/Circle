import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, View, StatusBar, Text} from 'react-native';
import React, {useState} from 'react';
import NotificationScreen from '../Screens/Home/NotificationScreen';

import Colors from '../constants/Colors';

import useColorScheme from '../hooks/useColorScheme';

const Notification = createMaterialTopTabNavigator();

export function NotifyNavigator() {
    const colorScheme = useColorScheme();
  return (
    <Notification.Navigator 
    tabBarOptions={{
        indicatorStyle: {backgroundColor: '#000', height: 2, borderRadius: 50},
        style: {backgroundColor: Colors[colorScheme].background, elevation: 0}
    }}
    >
      <Notification.Screen name="Fans" component={NotificationScreen}/>
      <Notification.Screen name="Following" component={NotificationScreen}/>
    </Notification.Navigator>
  );
}