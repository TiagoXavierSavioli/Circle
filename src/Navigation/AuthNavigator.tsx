/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 import { StyleSheet, View, StatusBar} from 'react-native';
 import { createStackNavigator } from '@react-navigation/stack';
 import React, {useState} from 'react'; 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import InitScreen from '../Screens/Auth/Init/InitScreen';
 import PassScreen from '../Screens/Auth/Register/PassScreen';
 import RegisterScreen from '../Screens/Auth/Register/UserScreen';
 import LoginScreen from '../Screens/Auth/Login/LoginScreen';
 import CompleteScreen from '../Screens/Auth/Complete/CompleteScreen';
 import { RegisterStackParamList, LoginStackParamList, InitStackParamList, AuthStackParamList } from '../types';
 

 const RegisterStack = createStackNavigator<RegisterStackParamList>();

export function RegisterNavigator(){
   const colorScheme = useColorScheme();
   return(
     <RegisterStack.Navigator initialRouteName={'User'}>
       <RegisterStack.Screen
         name="Pass"
         component={PassScreen}
         options={{
           headerTitle: 'Sign Up',
           headerTransparent: true,
           headerTitleAlign: 'left',
           headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
         }}
       />
       <RegisterStack.Screen
         name="User"
         component={RegisterScreen}
         options={{
           headerTitle: 'Sign Up',
           headerTransparent: true,
           headerTitleAlign: 'left',
           headerTintColor: Colors[colorScheme].icons,
           headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
         }}
       />
     </RegisterStack.Navigator>
   )
 }

 const LoginStack = createStackNavigator<LoginStackParamList>();

export function LoginNavigator(){
   const colorScheme = useColorScheme();
   return(
     <LoginStack.Navigator initialRouteName={'Login'}>
       <LoginStack.Screen
         name="Login"
         component={LoginScreen}
         options={{
           headerTitle: 'Sign In',
           headerTransparent: true,
           headerTitleAlign: 'left',
           headerTintColor: Colors[colorScheme].icons,
           headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
         }}
       />
     </LoginStack.Navigator>
   )
}

const InitStack = createStackNavigator<InitStackParamList>();

export function InitNavigator(){
    const colorScheme = useColorScheme();
    return(
      <InitStack.Navigator initialRouteName={'Init'}
      >
        <InitStack.Screen
          name="Init"
          component={InitScreen}
          options={{headerShown: false}}
        />
      </InitStack.Navigator>
    )
}

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigator(){
    const colorScheme = useColorScheme();
    return(
      <AuthStack.Navigator initialRouteName={'Init'}>
        <AuthStack.Screen
          name="Init"
          component={InitScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: 'Sign In',
            headerTransparent: true,
            headerTitleAlign: 'left',
            headerTintColor: Colors[colorScheme].icons,
            headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          }}
        />
        <AuthStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerTitle: 'Sign Up',
            headerTransparent: true,
            headerTitleAlign: 'left',
            headerTintColor: Colors[colorScheme].icons,
            headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          }}
        />
      </AuthStack.Navigator>
    )
}

 const styles = StyleSheet.create({
    header: {
      fontFamily: 'red-hat-display-bold',
      fontWeight: 'bold',
      fontSize: 25,
    },
  });