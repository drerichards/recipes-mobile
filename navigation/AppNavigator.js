import React from 'react'
import { Platform, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
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
    },
    tabBarColor: Colors.yellow,
    tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'openSans' }}>Meals</Text> : 'Meals'
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: tabInfo => <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
    },
    tabBarColor: Colors.pink,
    tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'openSans' }}>Favorites</Text> : 'Favorites'
  }
}

const MealsFavTabNavigator = Platform.OS === 'android' ?
  createMaterialBottomTabNavigator(tabConfig, {
    activeTintColor: Colors.blue,
    shifting: true
  })
  : createBottomTabNavigator(tabConfig, {
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'openSans',
      },
      activeTintColor: Colors.blue,
      activeBackgroundColor: Colors.yellow
    }
  })

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, defaultNavOptions)

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.pink,
    labelStyle: {
      fontFamily: 'openSansBold'
    }
  }
})

export default createAppContainer(MainNavigator)
