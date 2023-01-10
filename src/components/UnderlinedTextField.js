import { theme } from '../core/theme'
import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import {useFonts} from 'expo-font';
const UnderlinedTextField = ({ text, onClick }) => {
  const [fontsLoaded] = useFonts({
    'noteFont': require('../assets/note.ttf'),
  });
  if(fontsLoaded){
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    marginRight:10,
    marginTop:5,
  },
  text: {
    fontSize: 18,
    color: theme.colors.primary,
    fontFamily:'noteFont',
    textDecorationLine: 'underline'
  }
});

export default UnderlinedTextField;
