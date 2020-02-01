import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { toggleFavorite } from '../store/actions/mealActions'

const ListItem = props => <View style={styles.listItem}>
  <Text style={styles.text}>{props.children}</Text>
</View>

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId')
  const availableMeals = useSelector(state => state.meals.meals)
  const currentMealIsFav = useSelector(
    state => state.meals.favoriteMeals.some(
      meal => meal.id === mealId
    )
  )
  const selectedMeal = availableMeals.find(meal => meal.id === mealId)

  const dispatch = useDispatch()
  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavHandler })
  }, [toggleFavHandler])

  useEffect(() => {
    navigation.setParams({ isFav: currentMealIsFav })
  }, [currentMealIsFav])

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.titleText, { textTransform: 'lowercase' }}>{selectedMeal.duration} mins</Text>
        <Text style={styles.titleText}>{selectedMeal.complexity}</Text>
        <Text style={styles.titleText}>{selectedMeal.affordability}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>- {ingredient}</ListItem>)}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, i) => <ListItem key={step}>{i + 1}. {step}</ListItem>)}
      <View style={styles.screen}>
        <Button title='To Home'
          onPress={() => navigation.popToTop()}
        />
      </View>
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = navData => {
  const mealTitle = navData.navigation.getParam('mealTitle')
  const toggleFavorite = navData.navigation.getParam('toggleFav')
  const isFavorite = navData.navigation.getParam('isFav')

  return {
    headerTitle: mealTitle,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='Favorite'
        iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
        onPress={toggleFavorite}
      />
    </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'openSansBold',
    textAlign: 'center',
    fontSize: 20
  },
  titleText: {
    fontFamily: 'openSans',
    textTransform: 'capitalize'
  },
  text: {
    fontFamily: 'openSans'
  }
})

export default MealDetailScreen
