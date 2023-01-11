import SplitScreenNavigator from './SplitScreenNavigator'
import React from 'react'
import { theme } from '../core/theme'
import RefreshScreen from './RefreshScreen'
import AppBackground from './AppBackground'
import AppHeader from './AppHeader'
import { View } from 'react-native'
export default function AppScreen({ prop,children }) {
  return (
    <RefreshScreen  onRefresh={prop.onRefresh}>
      <AppBackground>
       <View style={{borderBottomColor: 'lightgray', borderBottomWidth: 0.2}}>
    <AppHeader title={prop.title}></AppHeader>
        {prop.routes!=null?<SplitScreenNavigator routes={prop.routes} activeRoute={prop.activeRoute} setActiveRoute={prop.setActiveRoute}></SplitScreenNavigator>:null}  
 
       </View>
       
        {children}  
      </AppBackground>
    </RefreshScreen>
  )
}
