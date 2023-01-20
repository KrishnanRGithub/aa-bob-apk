import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import { StartScreen, Complete, Dashboard, Login, Signup, Logout} from "./src/screens";
import { Profile, Equities, Transaction, MutualFund,AccountDetails, OtpScreen } from "./src/screens";
import {useFonts} from 'expo-font';
import './src/texts/i18n';
const Stack = createStackNavigator();

export default function App() {
  console.ignoredLogs = ['Warning: Each', 'Warning: Failed'];
  const [fontsLoaded] = useFonts({
    'noteFontEnglish': require('./src/assets/note.ttf'),
    'headFontEnglish': require('./src/assets/head.ttf'),
    'titleFontEnglish': require('./src/assets/title.ttf'),
  
  });  
  if(fontsLoaded){
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="NameScreen" component={NameScreen} /> */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Complete" component={Complete} />
          <Stack.Screen name="Logout" component={Logout} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Transaction" component={Transaction} />
          <Stack.Screen name="Equities" component={Equities} />
          <Stack.Screen name="MutualFund" component={MutualFund} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="AccountDetails" component={AccountDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
  }
}
