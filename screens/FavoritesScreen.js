import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)

  if (favMeals.length === 0 || !favMeals) {
    return <View style={styles.screen}><Text style={styles.text}>No Favorites Found!</Text></View>
  }

  return <MealList
    listData={favMeals}
    navigation={props.navigation}
  />
}

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='Menu'
        iconName='ios-menu'
        onPress={() => navData.navigation.toggleDrawer()}
      />
    </HeaderButtons>
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

export default FavoritesScreen
