import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealScreen = props => {
  const catID = props.navigation.getParam('id')
  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryID.indexOf(catID) >= 0
  )

  if (displayedMeals.length === 0 || !displayedMeals) {
    return <View style={styles.screen}>
      <Text style={styles.text}>No Meals Found!</Text>
      <Text style={styles.text}>Please Adjust Filters</Text>
    </View>
  }

  return <MealList
    listData={displayedMeals}
    navigation={props.navigation}
  />
}

CategoryMealScreen.navigationOptions = navData => {
  const catID = navData.navigation.getParam('id')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catID)

  return {
    headerTitle: selectedCategory.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'openSansBold',
    textAlign: 'center',
    fontSize: 20
  }
})

export default CategoryMealScreen
