import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return <MealItem data={itemData.item}
      onSelectMeal={() => {
        props.navigation.navigate({
          routeName: 'MealDetail', params: {
            mealId: itemData.item.id
          }
        })
      }}
    />
  }
  const catID = props.navigation.getParam('id')
  const displayedMeals = MEALS.filter(
    meal => meal.categoryID.indexOf(catID) >= 0
  )

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )
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
  }
})

export default CategoryMealScreen
