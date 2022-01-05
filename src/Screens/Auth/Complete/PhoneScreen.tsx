import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components/Themed';

export default function PhoneScreen() {

  return (
    <View style={styles.container}>
      <Text>Phone Screen</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
