import React from 'react'
import { FlatList } from 'react-native'
import GridTile from '../components/GridTile'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = props => {

  const renderGridItem = ({ item }) => {
    return (
      <GridTile title={item.title}
        color={item.color}
        onSelect={() => props.navigation.navigate({
          routeName: 'CategoryMeal',
          params: { id: item.id }
        })}
      />
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
  headerTitle: 'Meal Categories'
}



export default CategoriesScreen
