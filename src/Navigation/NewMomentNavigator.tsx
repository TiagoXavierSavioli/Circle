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

import NewMomentScreen from '../Screens/New/NewMomentScreen';
import NewMomentEditScreen from '../Screens/New/NewMomentEditScreen'

 import {MomentParamList} from '../types';
 
 const MomentStack = createStackNavigator<MomentParamList>();

export default function NewScreenNavigator() {
  const colorScheme = useColorScheme();
  return (
    <MomentStack.Navigator>
      <MomentStack.Screen
        name="CreateScreen"
        component={NewMomentScreen}
        options={{
          headerTitle: 'Add Moment',
          headerTitleAlign: 'left',
          headerTintColor: '#FFF',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 23},
          cardStyle: {backgroundColor: '#000'},
          headerStyle: {backgroundColor: '#000', elevation: 0},
        }}
      />      
      <MomentStack.Screen
        name="MomentScreen"
        component={NewMomentEditScreen}
        options={{
          headerTitle: 'Edit',
          headerTitleAlign: 'left',
          headerTransparent: true,
          headerTintColor: '#FFF',
          cardStyle: {backgroundColor: '#000'},
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          headerStyle: {backgroundColor: '#000', elevation: 0},
        }}
      />

    </MomentStack.Navigator>
  );
}