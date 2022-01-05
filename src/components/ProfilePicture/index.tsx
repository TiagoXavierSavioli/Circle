import React from 'react';
import {Image} from 'react-native-elements'
import { Text, View} from '../Themed';
import FastImage from 'react-native-fast-image'
import { Animated } from 'react-native';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

export type ProfilePictureProps = {
  image?: string,
  size?: number,
  borderRadious?: number
}

export type MomentsPreviewProps = {
  image?: string,
  width?: number,
  height?: number,
  borderRadious?: number,
  borderBottomLeftRadius?: number,
  borderBottomRightRadius?: number,
}

export const ProfilePicture = ({image, size = 50, borderRadious}: ProfilePictureProps) => (

  <FastImage
  source={{ uri: image || '' }}
    style={{
      width: size,
      height: size,
      borderRadius: borderRadious,
    }}
  />  
)

export const MomentsPreview = ({
  image,
  width = 50,
  height = 50,
  borderRadious,
  borderBottomRightRadius = borderRadious,
  borderBottomLeftRadius = borderRadious,
}: MomentsPreviewProps) => (
  <AnimatedFastImage
    source={{ uri: image || '' }}
    style={{
      width: width,
      height: height,
      borderBottomLeftRadius: borderBottomLeftRadius,
      borderBottomRightRadius: borderBottomRightRadius,
      borderRadius: borderRadious,
    }}
  />  
)
export const ProfilePictureDefault = ({ size = 50, borderRadious}: ProfilePictureProps) => (
  <Image
    source={{ uri : '../../assets/images/user/userPicture.png' }}
    style={{
      width: size,
      height: size,
      borderRadius: borderRadious
    }}
  />  
)
