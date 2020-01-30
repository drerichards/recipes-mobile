import React, { useState } from 'react'
import { enableScreens } from 'react-native-screens'
import * as Font from 'expo-font'
import AppNavigator from './navigation/AppNavigator'
import { AppLoading } from 'expo'

enableScreens()

const fetchFonts = () => {
  return Font.loadAsync({
    'openSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'openSansBold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }
  return <AppNavigator />
}