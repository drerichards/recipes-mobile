import React from 'react'
import { useSelector } from 'react-redux'
import { View, StyleSheet, FlatList } from 'react-native'
import MealItem from './MealItem'

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.find(meal =>
      meal.id === itemData.item.id)

    return <MealItem data={itemData.item}
      onSelectMeal={() => {
        props.navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFavorite
          }
        })
      }}
    />
  }
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealList
