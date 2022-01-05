import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, Dimensions, TextInput, View } from 'react-native';
import AccountView from '../../components/Profile/AccountView';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import userProfile from '../../components/data/userProfile'; 
import { ProfilePicture, ProfilePictureDefault } from '../../components/ProfilePicture';
import {Image} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native';
import {ListItem, Icon} from 'react-native-elements'
import { useRoute } from '@react-navigation/core';

const WindowWidth = Dimensions.get('window').width
const imageSize = 120
const IconMessage = require('../../assets/Icons/camera-outline.png')

export default function TermsOfUseScreen() {
  const route = useRoute()
  const colorScheme = useColorScheme()
  const navigation = useNavigation()

  const [inputA, setInputA] = useState('')
  return (
    <View style={styles.container}>
      <Text>Terms of Use</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#FFF',
    width: WindowWidth,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
});
