import React,{useState} from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { theme } from '../core/theme'
import { useTranslation } from 'react-i18next';
const AppHeader = ({ title,subNav,children,routes }) => {
  const {t, i18n} = useTranslation();

    return (
    <View style={styles.container}>
      <View style={{     flexDirection: 'row',
      justifyContent: 'space-between',
      width: "100%"}}>
        <StatusBar backgroundColor= {theme.colors.background} />
        <Text style={styles.title}>{t(title)}</Text>
      </View>
      {children}
    </View>
  );
    
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
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
    fontFamily: 'headFontEnglish',
    // fontWeight: 'bold',
    color: theme.colors.primary,
    marginLeft: 10,
    fontWeight:"600"
  }
});

export default AppHeader;
