import SplitScreenNavigator from './SplitScreenNavigator'
import React from 'react'
import { theme } from '../core/theme'
import AppBackground from './AppBackground'
import AppHeader from './AppHeader'
import BackButton from './BackButton'
export default function BackScreen({ prop,children }) {
  return (
      <AppBackground>
        <BackButton title={prop.title} onPress={prop.onPress}></BackButton> 
        {children}  
      </AppBackground>
  )
}




  
  