import React,{useState, useRef} from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import { Icon } from "react-native-elements";
import usersMap from "../../data/Maps/usersMap";
import { UserType, markerContentProps } from "../../../types";
import { ProfilePicture, ProfilePictureDefault } from "../../ProfilePicture";
import { VerifyTransparent, Verify } from "../../Verify";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { MotiView } from '@motify/components'
import { Easing } from 'react-native-reanimated'

const MarkerContent = (props: markerContentProps) => {
  const {image} = props

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          {image?
            <ProfilePicture image={`${image}`} size={30} borderRadious={50}/>
            :
            <ProfilePictureDefault size={15} borderRadious={50}/>
          }
        </View>
      </View>
    );
};

const _size = 100 

export const MarkerContentYou = (props: markerContentProps) => {

  const {username, verify, account, image} = props

  const colorSheme = useColorScheme()

    return (
      <View style={[styles.container, {}]}>
        {[...Array(2).keys()].map((index) => {
          return(
            null
          )
        })

        }
        <View style={styles.textContainer}>
          <View style={{padding: 5, backgroundColor: Colors[colorSheme].verifyed, borderRadius: 50}}>
            {image?
              <ProfilePicture image={`${image}`} size={20} borderRadious={50}/>
              :
              <ProfilePictureDefault size={15} borderRadious={50}/>
            }            
          </View>

          <View style={styles.verify}>
            <Verify verify={verify} size={10} padding={0.5}/>
          </View>
        </View>
        <Text style={{zIndex: 2, fontFamily: 'RedHatDisplay-Bold', fontSize: 14}}>Me</Text>
      </View>
    );
};
export default MarkerContent

export const styles = StyleSheet.create({
 container: {
   alignItems: 'center',
   justifyContent: 'center',
   width: 50,
   backgroundColor: 'transparent',
   height: 55,
 },
 textContainer: {
   borderRadius: 10,
   flex: 1,
   flexDirection: 'row',
   alignItems: 'center',
 },
 text: {
   textAlign: 'center',
   paddingHorizontal: 5,
   flex: 1,
 },
 icon: {
   paddingTop: 10,
 },
 verify: {
   position: "absolute",
   top: 10,
   right: -3
 },
 dot: {
   width: _size,
   height: _size,
   borderRadius: _size
 }
});