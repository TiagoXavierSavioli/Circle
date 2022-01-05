import React,{useState, useRef} from "react"
import { View, Text, StyleSheet, Pressable, Animated } from "react-native"
import FastImage from "react-native-fast-image"
import { ProfilePicture, ProfilePictureDefault } from "../../ProfilePicture"
import Colors from "../../../constants/Colors"
import useColorScheme from "../../../hooks/useColorScheme"

export type CalloutProps = {
  user?: undefined,
  distance?: string
}

const MarkerCallout = (props: CalloutProps) => {
  const {user, distance} = props

  const colorScheme = useColorScheme()

    return (
      <View style={styles.container}>
        <Text style={styles.text}>@{user.username}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <FastImage source={require('../../../assets/icons/map-pin.png')} style={{width: 12, height: 12, marginRight: 3}} resizeMode={'contain'}/>
          <Text style={[styles.text, {fontSize: 10}]}>{distance} M</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
        <Text style={[styles.buttonText, {color: Colors[colorScheme].tint}]}>See Profile</Text>
        </View>
        
      </View>
    )
}

export default MarkerCallout

export const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: '#FFF',
    height: 80,
    borderRadius: 10,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  text: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 12
  },
  icon: {
    paddingTop: 10,
  },
  buttonText: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 14
  },
});