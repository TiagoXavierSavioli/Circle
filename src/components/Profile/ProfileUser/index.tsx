import React from "react";
import { Text, Username } from "../../Themed";
import { View, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { ProfileUsers, UserType } from "../../../types";
import { ProfilePicture, ProfilePictureDefault} from "../../ProfilePicture";
import ImageDecoding from '../../../helpers/imageDecoding'
import { Verify, VerifyTransparent } from "../../Verify";
import { Buffer } from 'buffer'

export const ProfileUserComponent = (props: ProfileUsers) => {
    const {username, image, imageSize} = props

    const ImageBase64 = 'data:image/png;base64,'+ String(ImageDecoding(image.data))
    const WindowWidth = Dimensions.get('window').width
    const WindowHeight = Dimensions.get('window').height
    return (
        <View style={styles.container}>
            <View style={{borderRadius: 10, marginBottom: -15}}>
                {image != null?
                    <ProfilePicture image={Buffer.from(image.data).toString()} size={imageSize} borderRadious={100}/>:
                    <ProfilePictureDefault size={imageSize} borderRadious={100}/>
                }                
            </View>

            
            <View style={{alignItems: "center"}}>
                <Text style={[styles.username, {marginTop: 30, fontSize: 22}]}>@{username}</Text>

            </View>
            
        </View>
    )
}

export const ProfileUserComponentMap = (props: ProfileUsers) => {
    const {username, name, image, verify, account, imageSize = 130, phone} = props
    const WindowWidth = Dimensions.get('window').width
    const WindowHeight = Dimensions.get('window').height
    return (
        <View style={{alignItems: "center", flexDirection: 'row'}}>
            <View>
                <View style={{marginRight: 0}}>
                    {image?
                        <ProfilePicture image={`${image}`} size={imageSize} borderRadious={100}/>:
                        <ProfilePictureDefault size={imageSize} borderRadious={100}/>
                    }                
                </View>

                <View style={{alignItems: "center"}}>
                    <Text style={[styles.username, {marginTop: 10, fontSize: 22}]}>@{username}</Text>
                </View>                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    informationsContainer: {
      marginTop: 20,
      paddingHorizontal: 10,
      width: '100%',
    },
    informationsSubviews: {
      marginBottom: 20,
      marginHorizontal: 10
    },
    informations: {
      fontSize: 14,
      fontFamily: 'RedHatDisplay-Medium',
      color:'#8C9BAA', 
  
    },
    username: {
        fontSize: 16,
        fontFamily: 'RedHatDisplay-Bold'
    }
  });
  