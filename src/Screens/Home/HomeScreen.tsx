import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

import Map from '../../components/Map/MapView/index.'

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'}/>
      <Map/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
    backgroundColor: '#000000',
  },
});
