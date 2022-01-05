import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';

export default function CompleteScreen() {

  return (
    <View style={styles.container}>
      <Text>Complete Screen</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
