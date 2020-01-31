import React from 'react'
import { FlatList } from 'react-native'
import GridTile from '../components/GridTile'
import { CATEGORIES } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

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

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='Menu'
        iconName='ios-menu'
        onPress={() => navData.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  }
}



export default CategoriesScreen
