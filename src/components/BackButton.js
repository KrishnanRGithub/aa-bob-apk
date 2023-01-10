import React from 'react';
import { View, Text, Image, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme'
import {useFonts} from 'expo-font';

const BackButton = ({ title, onPress, children }) => {
  const [fontsLoaded] = useFonts({
    'headFont': require('../assets/head.ttf'),
  });

  if(fontsLoaded){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor= "papayawhip" />
        <View style={{ flexDirection: 'row',  width: "100%" }}>
          <TouchableOpacity onPress={onPress}>
            <Image source={require('../assets/arrow_back.png')} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
        {children}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "papayawhip",
    borderBottomWidth: 0,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    overflow: 'visible',
    zIndex:1,
  },
  title: {
    fontSize: 25,
    fontFamily: 'headFont',
    // fontWeight: 'bold',
    color: theme.colors.primary,
    marginLeft: 10,
  },
  backButton: {
    width: 32,
    height: 32,
    marginRight: 16,
    marginLeft:5,
  }
});

export default BackButton;
