import React from 'react'
import { ImageBackground, StyleSheet,View, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'
import LanguagePicker from './LanguagePicker'
export default function Background({ children }) {
  return (
    <ImageBackground
      resizeMode="repeat"
      style={styles.background}
    >
      <View style={{top:35,width:180}}>
        <LanguagePicker/>
      </View>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:90  
  },
})
