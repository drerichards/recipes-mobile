import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import Colors from '../constants/Colors'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    console.log(itemData)
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    )
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
