import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, ViewAuth } from '../../../components/Themed';

export default function PassScreen() {

  return (
    <ViewAuth style={styles.container}>
      <Text>Pass Screen</Text>
    </ViewAuth>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
