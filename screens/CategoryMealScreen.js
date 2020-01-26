import React from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import Colors from '../constants/Colors'
import { CATEGORIES } from '../data/dummy-data'

const CategoryMealScreen = props => {
  const catID = props.navigation.getParam('id')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catID)

  return (
    <View style={styles.screen}>
      <Text>CategoryMealScreen</Text>
      <Button title='Meal Details'
        onPress={() => props.navigation.navigate('MealDetail')}
      />
      <Button title='Go Back'
        onPress={() => props.navigation.goBack()}
      />
    </View>
  )
}

CategoryMealScreen.navigationOptions = navData => {
  const catID = navData.navigation.getParam('id')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catID)

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.blue : ''
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.blue
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealScreen
