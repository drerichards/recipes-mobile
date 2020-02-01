import React, { useState } from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { enableScreens } from 'react-native-screens'
import * as Font from 'expo-font'
import AppNavigator from './navigation/AppNavigator'
import { AppLoading } from 'expo'
import mealsReducers from './store/reducers/meals'

enableScreens()

const rootReducer = combineReducers({
  meals: mealsReducers
})

const store = createStore(rootReducer)

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
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}