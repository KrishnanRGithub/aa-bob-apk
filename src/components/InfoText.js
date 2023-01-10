import { theme } from '../core/theme'
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {useFonts} from 'expo-font';
const InfoText = ({ text}) => {
  const [fontsLoaded] = useFonts({
    'noteFont': require('../assets/note.ttf'),
  });
  if(fontsLoaded){
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    marginLeft:20,
    marginTop:10,
    marginBottom:20,
  },
  text: {
    fontSize: 13,
    color: "gray",
    fontFamily:'noteFont',
  }
});

export default InfoText;
