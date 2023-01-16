import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../core/theme'
import { useTranslation } from 'react-i18next';
import MutualFundScreen from '../screens/tab/MutualFund';
import EquitiesScreen from '../screens/tab/Equities';
import ProfileScreen from '../screens/tab/Profile';
import TransactionScreen from '../screens/tab/Transaction';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  const {t, i18n} = useTranslation();
  return (
      <Tab.Navigator
screenOptions={{
    headerShown:false,
    tabBarShowLabel: true,
    tabBarStyle: {
      paddingBottom:7,
      paddingTop:5,
      height:65,
      justifyContent:"space-between",
      width:"100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.background,
    },
    labelStyle: {
        fontSize: 14,
        marginBottom: 10,
      fontFamily: 'titleFontEnglish',
      fontWeight: '700',
        activeTintColor: "red",
        inactiveTintColor: "gray",    
    },
  }}
  tabBarOptions={{
    activeTintColor: theme.colors.primary,
    inactiveTintColor: "gray",
    labelStyle: {
       fontSize:11,
       fontFamily: 'titleFontEnglish',
       fontWeight: '800',
       marginBottom: 2, 
     },
  }}
      >
      <Tab.Screen
          name={"Equities"}
          component={EquitiesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="suitcase" color={color} size={30} />
            ),
            tabBarLabel: t('Equities'),
          }}
        />
        <Tab.Screen
          name={"Transactions"}
          component={TransactionScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
                  <Icon name="bank" color={color} size={30} />
            ),
            tabBarLabel: t('Transactions'),
          }}
        />      
        <Tab.Screen
          name={"Home"}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={37} />
            ),
            tabBarLabel: t('Home'),
          }}
        />
        <Tab.Screen
          name={"Mutual Funds"}
          component={MutualFundScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon5 name="coins" color={color} size={30} />
            ),
            tabBarLabel: t('Mutual Funds'),
          }}
        />
        <Tab.Screen
          name={"Profile"}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon5 name="user-alt" color={color} size={30} />
            ),
            tabBarLabel: t('Profile'),
          }}
        />
      </Tab.Navigator>
      
  );
        
};

// const styles = StyleSheet.create({
//     navbar: {
//         bottom: 20,
//         shadowColor: 'black', // add shadow to the tab navigator
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 2,
//         backgroundColor: 'white',
//         borderTopWidth: 1,
//         borderTopColor: 'lightgray',
//     },
//   })
  
export default NavBar;