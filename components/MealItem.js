import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = ({ data, onSelectMeal }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: data.imageUrl }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>{data.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{data.duration}mins</Text>
            <Text>{data.complexity.toUpperCase()}</Text>
            <Text>{data.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '96%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'openSansBold',
    fontSize: 22,
    color: '#fff',
    textAlign: 'center'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  }
})

export default MealItem
