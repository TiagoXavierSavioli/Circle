import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components/Themed';

export default function EmailScreen() {

  return (
    <View style={styles.container}>
      <Text>Email Screen</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
