import React ,{useState, useEffect} from 'react'
import { View, Text, MomentsBackground} from '../../components/Themed'
import MomentsView from '../../components/Moments/Photo'
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Dimensions} from 'react-native';
import UserMomentsList from '../../components/Moments/List';
import LinearGradient from 'react-native-linear-gradient';

const WindowWidth = Dimensions.get('window').width

export default function MomentScreen() {

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View style={styles.container}>
        <UserMomentsList/>
      </View>      
      <LinearGradient
        style={{
          width: WindowWidth,
          height: 180,
          position: 'absolute',
          top: 0,
          zIndex: 0,
          borderRadius: 30,
        }}
        colors={['#00000070', '#00000000']}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: '#000000',
    
  },
});
