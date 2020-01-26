import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native'
import Colors from '../constants/Colors'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = props => {

  const renderGridItem = itemData => {
    return (
      <TouchableOpacity style={styles.gridItem}
        onPress={() => props.navigation.navigate({
          routeName: 'CategoryMeal',
          params: {
            id: itemData.item.id
          }
        })}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
    />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.blue : ''
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.blue
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoriesScreen
