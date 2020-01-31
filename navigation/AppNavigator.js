import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
// import { createDrawerNavigator } from 'react-navigation-drawer'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

const defaultNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.blue : ''
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.blue
  }
}

const AppNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeal: CategoryMealScreen,
  Filters: FiltersScreen,
  MealDetail: MealDetailScreen
}, defaultNavOptions)

const FavoritesNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, defaultNavOptions)

const tabConfig = {
  Meals: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
    }, tabBarColor: Colors.yellow
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: tabInfo => <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
    }, tabBarColor: Colors.pink
  }
}

const MealsFavTabNavigator = Platform.OS === 'android' ?
  createMaterialBottomTabNavigator(tabConfig, {
    activeTintColor: Colors.blue,
    shifting: true
  })
  : createBottomTabNavigator(tabConfig, {
    tabBarOptions: {
      activeTintColor: Colors.blue
    }
  })

export default createAppContainer(MealsFavTabNavigator)
