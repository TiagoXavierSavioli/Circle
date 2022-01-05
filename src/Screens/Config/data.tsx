import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, Dimensions, Pressable, TextInput, View } from 'react-native';
import userProfile from '../../components/data/userProfile'; 

const[defaultName, setDefaultName]=useState(userProfile.map(u => u.name))
const[defaultusername, setDefaultUsername]=useState(userProfile.map(u => u.username))
const[defaultDescription, setDefaultDescription]=useState(userProfile.map(u => u.description))

const[defaultAge, setDefaultAge]=useState(userProfile.map(u => u.informations.age))
const[defaultBirthday, setDefaultBirthday]=useState(userProfile.map(u => u.informations.birthday))
const[defaultOrientation, setDefaultOrientation]=useState(userProfile.map(u => u.informations.orientation))
const[defaultGender, setDefaultGender]=useState(userProfile.map(u => u.informations.gender))

const[defaultAccount, setDefaultAccount]=useState(userProfile.map(u => u.stats.account))
const[defaultVerify, setDefaultVerify]=useState(userProfile.map(u => u.stats.verify))

const[defaultCity, setDefaultCity]=useState(userProfile.map(u => u.location.region.city))
const[defaultCountry, setDefaultCountry]=useState(userProfile.map(u => u.location.region.country))
const[defaultState, setDefaultState]=useState(userProfile.map(u => u.location.region.state))

export const itemsProfile = [
    {
        id: '2',
        title: 'Username',
        text: defaultusername
    },
    {
        id: '3',
        title: 'Description',
        text: defaultDescription

    },
]

export const itemsPersonalInformation = [
    {
        id: '7',
        title: 'Phone',
        text: defaultAge,
    },
    {
        id: '8',
        title: 'Email',
        text: defaultBirthday
    },
    {
        id: '9',
        title: 'Orientation',
        text: defaultOrientation
    },
    {
        id: '10',
        title: 'Gender',
        text: defaultGender
    },
    {
        id: '10',
        title: 'Birthday',
        text: defaultGender 
    },
]