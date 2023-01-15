import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
const Footer = () => {
      const {t, i18n} = useTranslation();
        return (
            <View style={styles.container}>
                <Image source={require('../assets/footer.png')} style={styles.image} />
                <Text style={styles.text}>{"© 2023 "+t('Angris')}</Text>
            </View>
        );

};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // centers the items horizontally
    justifyContent: 'center', // centers the items vertically
  },
  image: {
    width: "50%",
    height: 72,
  },
  text: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'noteFontEnglish',
  },
});

export default Footer;