import React, {useRef} from 'react';
import { StyleSheet, TouchableOpacity, View, Pressable, Text, Dimensions} from 'react-native';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import {MessageParamList, RootStackParamList} from '../../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import FastImage from 'react-native-fast-image';
import {Image, ListItem, Icon} from 'react-native-elements'

const list = [
    {
        title: 'View profile',
        icon: 'person',
        navigate: 'Account'
    },
    {
        title: 'Settings',
        icon: 'settings',
        navigate: 'Config'
    },
]


export default function ModalComponent() {
    const colorScheme = useColorScheme()
    const refRBSheet = useRef();

    const mapboxLogo = require('../../../assets/images/logos/mapboxLogo.png')

    type messageScreenProp = StackNavigationProp<RootStackParamList,'Messages' >;
    const messagesNavigation = useNavigation<messageScreenProp>();
    return(
        <View>
          <View style={styles.header}>
            <Text style={{fontSize: 18, marginBottom: 15, alignSelf: 'center', fontFamily: 'RedHatDisplay-Bold'}}>Principal menu</Text>
          </View>
            {list.map((item, i) => (
              <ListItem key={i} onPress={() => messagesNavigation.navigate(item.navigate)}>
                <Icon name={item.icon} />
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))}  
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 10, marginTop: 15}}>
            <Text style={{fontSize: 10, alignSelf: 'center', fontFamily: 'RedHatDisplay-Medium', color: '#00000080'}}>Circle map powered by</Text>
            <FastImage source={mapboxLogo} style={{width: 70, height: 14}} resizeMode={'contain'}/>
          </View>
        </View>
    )

}

const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
      },
      ratingImage: {
        height: 19.21,
        width: 100
      },
      ratingText: {
        paddingLeft: 10,
        color: 'grey'
      },
      header: {
        alignItems: 'center',
        borderBottomWidth: 0,
        borderColor: '#00000010'
    },
});