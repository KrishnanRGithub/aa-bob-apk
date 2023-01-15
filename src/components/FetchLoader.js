import React from 'react'
import { Image, StyleSheet,Text } from 'react-native'
import { useTranslation } from 'react-i18next'
export default function FetchLoader() {
  const {t, i18n} = useTranslation();

            return<>
        <Image source={require('../assets/onstart-loading.gif')} style={styles.image} />
        <Text style={styles.note}>{t('Note : Ensure that you have given access in AA')}</Text>
        </> 
      
}

const styles = StyleSheet.create({
  image: {
    marginTop: 200,
    width: 110,
    height: 110,
    marginBottom: 8,
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  note:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "noteFontEnglish",
    fontSize:14
  }
})
