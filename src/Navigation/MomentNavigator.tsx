/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 import { StyleSheet} from 'react-native';
 import { createStackNavigator } from '@react-navigation/stack';
 import React from 'react';
 import ProfileScreen from '../Screens/ViewProfile/ProfileScreen';
 
 import {HeaderPhoto, HeaderHome, HeaderMoments, HeaderBack} from '../components/Headers/index' 
 import Colors from '../constants/Colors';
 
 import useColorScheme from '../hooks/useColorScheme';

import MomentScreen from '../Screens/Moment';

 import {MomentParamList} from '../types';
 
 const MomentStack = createStackNavigator<MomentParamList>();

export function MomentScreenNavigator() {
  const colorScheme = useColorScheme();
  return (
    <MomentStack.Navigator>
      <MomentStack.Screen
        name="MomentScreen"
        component={MomentScreen}
        options={{
          headerTitle: 'Moments (Beta)',
          headerTitleAlign: 'left',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 23},
          
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          headerRight: () => (
            <HeaderMoments/>
          )
        }}
      />
    </MomentStack.Navigator>
  );
}

export function ProfileScreenNavigator() {
  const colorScheme = useColorScheme();
  return (
    <MomentStack.Navigator>
      <MomentStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: '',
          headerTitleAlign: 'left',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25, marginLeft: 20},
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          headerLeft: () => (
            <HeaderBack/>
          ),
          headerRight: () => (
            <HeaderPhoto/>
          )
        }}
      />
    </MomentStack.Navigator>
  );
}

 const styles = StyleSheet.create({
    header: {
      fontFamily: 'red-hat-display-bold',
      fontWeight: 'bold',
      fontSize: 25,
    },
  });