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
import { Image } from 'react-native-elements';
import { ProfilePicture, ProfilePictureDefault } from '../components/ProfilePicture';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../Screens/Home/HomeScreen';
import SearchScreen from '../Screens/Search';
import AccountScreen from '../Screens/Account/AccountScreen';
import ProfileScreen from '../Screens/ViewProfile/ProfileScreen';
import MessagesScreen from '../Screens/Messages/MessagesScreen';
import photoPickerScreen from '../Screens/Config/photoPicker';
import NotificationScreen from '../Screens/Home/NotificationScreen';
import  {NotifyNavigator } from '../Navigation/NotificationNavigator';
import TalkScreen from '../Screens/Messages/TalkScreen';
import { MomentScreenNavigator } from './MomentNavigator';
import NewMomentScreenNavigator from './NewMomentNavigator';
import { ConfigScreenNavigator } from '../Navigation/ConfigNavigator'
import {
  BottomTabParamList,
  HomeParamList,
  AccountParamList,
  MessageParamList,
  NotificationParamList,
  CameraParamList
} from '../types';
import HeaderProfle from '../components/Headers/Profile/HeaderProfile';

const TabOneStack = createStackNavigator<HomeParamList>();

const AccountStack = createStackNavigator<HomeParamList>();

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
export default function BottomTabNavigator() {

  const colorScheme = useColorScheme();

  const [iconColor, setIconColor] = useState(Colors[colorScheme].icons)
  const [tabBarColor, setTabBarColor] = useState(Colors[colorScheme].background)

  const HomeOutline = require('../assets/icons/bolt.png')
  const Home = require('../assets/icons/bolt.png')

  const groupOutline = require('../assets/icons/map-pin.png')
  const group = require('../assets/icons/map-pin.png')

  const searchOutline = require('../assets/icons/mail.png')
  const search = require('../assets/icons/mail.png')

  const cameraOutline = require('../assets/icons/camera-plus.png')
  const camera = require('../assets/icons/camera-plus.png')


  const iconStyle = {
    width: 25, height: 25, tintColor: '#8C9BAA'
  }
  const iconStyleFocused = {
    width: 25, height: 25, tintColor: Colors[colorScheme].tint
  }

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {borderTopWidth: 0, backgroundColor: '#000000'}
        
      }}
    >
      <BottomTab.Screen
        name="map"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({focused}) => 
          focused?
            <Image source={group} style={iconStyleFocused} resizeMode='contain'/>
            :
            <Image source={groupOutline} style={iconStyle} resizeMode='contain'/>
        }}
      />
        <BottomTab.Screen
          name="NewMoments"
          component={NewMomentScreenNavigator}
          options={{
            tabBarIcon: ({focused}) =>
              focused?
                <Image source={camera} style={iconStyleFocused} resizeMode='contain'/>
              :
                <Image source={cameraOutline} style={iconStyle} resizeMode='contain'/>
          }}
        />        
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
  return <Icon size={30} style={{}} {...props} type="ionicons"/>;
}

export function HomeScreenNavigator() {
  const colorScheme = useColorScheme();
  return (
    <TabOneStack.Navigator
      screenOptions={{
        cardOverlayEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Circle',
          headerTitleAlign: 'left',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          headerStyle: {backgroundColor: Colors[colorScheme].background},
          cardStyle: {backgroundColor: '#000000'},
          cardOverlayEnabled: true,
          headerRight: () => ( <HeaderHome/>)
        }}
      />
      <TabOneStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTitle: 'Search',
          headerTitleAlign: 'left',
          headerShown: true,
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          headerTintColor: Colors[colorScheme].icons,
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          cardStyle: {backgroundColor: '#000000'},
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}
      />
      <TabOneStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: '',
          headerTitleAlign: 'left',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25, marginLeft: 20},
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          cardStyle: {backgroundColor: '#000'},
          headerLeft: () => (
            <HeaderBack/>
          ),
        }}
      />
      <TabOneStack.Screen
        name="PhotoPickerScreen"
        component={photoPickerScreen}
        options={{
          headerTitle: 'Photo',
          headerTitleAlign: 'left',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          headerTintColor: Colors[colorScheme].icons,
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          cardStyle: {backgroundColor: '#000'},
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}
      />
      <TabOneStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerTitle: 'Account',
          headerTransparent: true,
          headerTitleAlign: 'left',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          cardStyle: {backgroundColor: '#000'},
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          headerRight: () => (
            <HeaderProfle/>
          ),
          headerLeft: () => (
            <HeaderBack transparent={false}/>
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <TabOneStack.Screen
        name="ChatScreen"
        component={TalkScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          headerTitleAlign: 'left',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          cardStyle: {backgroundColor: '#000'},
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
        }}
      />
      <TabOneStack.Screen
        name="ConfigNavigator"
        component={ConfigScreenNavigator}
        options={{
          headerShown: false,
        }}
      />

    </TabOneStack.Navigator>
  );
}
function AccountScreenNavigator() {
  const colorScheme = useColorScheme();
  return (
    <AccountStack.Navigator
    screenOptions={{headerShown: false}}>
      <AccountStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerTitle: 'Profile',
          headerTransparent: true,
          headerTitleAlign: 'left',
          headerTintColor: '#000',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25, marginLeft: 20},
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
          cardStyle: {borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: '#000'},
          headerRight: () => (
            <HeaderProfle/>
          ),
          headerLeft: () => (
            <HeaderBack transparent={false}/>
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

    </AccountStack.Navigator>
  );
}

const MessageStack = createStackNavigator<MessageParamList>();

export function MessageNavigator(){
  const colorScheme = useColorScheme();
  return(
    <TabOneStack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}
    >
      <MessageStack.Screen
      
        name="MessagesScreen"
        component={MessagesScreen}
        options={{
          headerTitle: 'Messages',
          headerTransparent: false,
          headerTitleAlign: 'left',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25, color: '#000'},
          cardStyle: {backgroundColor: '#000'},
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
        }}
      />
      <MessageStack.Screen
        name="TalkScreen"
        component={TalkScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          headerTitleAlign: 'left',
          headerTitleStyle: {fontFamily: 'RedHatDisplay-Bold', fontSize: 25},
          cardStyle: {backgroundColor: '#000'},
          headerStyle: {backgroundColor: Colors[colorScheme].background, elevation: 0},
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

const NotificationStack = createStackNavigator<NotificationParamList>();
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