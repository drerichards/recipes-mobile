import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import MealItem from './MealItem'

const MealList = props => {
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