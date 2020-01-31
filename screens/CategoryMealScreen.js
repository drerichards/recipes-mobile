import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealScreen = props => {
  const catID = props.navigation.getParam('id')
  const displayedMeals = MEALS.filter(
    meal => meal.categoryID.indexOf(catID) >= 0
  )

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

export default CategoryMealScreen
