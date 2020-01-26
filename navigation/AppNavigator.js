import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createDrawerNavigator } from 'react-navigation-drawer'
import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealScreen from "../screens/CategoryMealScreen"
import FavoritesScreen from "../screens/FavoritesScreen"
import FiltersScreen from "../screens/FiltersScreen"
import MealDetailScreen from "../screens/MealDetailScreen"


const AppNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeal: CategoryMealScreen,
  Favorites: FavoritesScreen,
  Filters: FiltersScreen,
  MealDetail: MealDetailScreen
})

export default createAppContainer(AppNavigator)
