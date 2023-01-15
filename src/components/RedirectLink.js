import React from 'react';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../core/theme'
import { useTranslation } from 'react-i18next';
const RedirectLink = ({toPage,linkText}) => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();

 
  const handlePress = () => {
    navigation.navigate(toPage);
  };

    return (
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.link}>{t(linkText)}</Text>
      </TouchableOpacity>
    );
  
};

const styles = StyleSheet.create({
  link: {
    color: theme.colors.secondary,
    fontFamily: "noteFontEnglish",
  },
});

export default RedirectLink;