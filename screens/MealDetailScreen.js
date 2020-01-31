import React from 'react'
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { MEALS } from '../data/dummy-data'

const ListItem = props => <View style={styles.listItem}>
  <Text style={styles.text}>{props.children}</Text>
</View>

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

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
          onPress={() => props.navigation.popToTop()}
        />
      </View>
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = navData => {
  const mealId = navData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='Favorite'
        iconName='ios-star'
        onPress={() => console.log('Fav')}
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
