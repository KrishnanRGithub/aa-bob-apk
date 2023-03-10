import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { theme } from '../core/theme';
import { useTranslation } from 'react-i18next';
const SplitScreenNavigator = ({ routes,activeRoute,setActiveRoute }) => {
  const [activeIndex, setActiveIndex] = useState(activeRoute);
  const {t, i18n} = useTranslation();

  useEffect(() => {
    // navigation.navigate(routes[activeIndex]['path'])
    setActiveRoute(activeIndex);
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {routes.map((route, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.header, index === activeIndex ? styles.activeHeader : {}]}
            onPress={() => setActiveIndex(index)}
          >
            <Text style={[styles.headerText, index === activeIndex ? styles.activeHeaderText : {}]}>{t(route.title)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    position:"relative",
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.background,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  activeHeader: {
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'headFontEnglish',
  },
  activeHeaderText: {
    fontWeight: 'bold',
  },
  // scrollView: {
  //   flex: 1,
  // },
  routeContainer: {
    width: '100%',
  },
  // content:{
  //   zIndex:10
  // },
  // inactiveContent:{
  //   display:"none"
  // }
});

export default SplitScreenNavigator;



// <ScrollView style={styles.scrollView} horizontal>
// {routes.map((route, index) => (
//     index === activeIndex?(<View key={index} style={[styles.content]}>
//     <Text>{index}</Text>
//     {route.component}
//   </View>):null
// ))}
// <View style={[styles.content]}>
//    {activeRoute.component}
// </View>
// </ScrollView>