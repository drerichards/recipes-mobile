import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

const GridTile = props => {
  let TouchableComp = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback
  }

  return (
    <View style={styles.itemContainer}>
      <TouchableComp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{ ...styles.gridItem, ...{ backgroundColor: props.color } }} >
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableComp>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },
  gridItem: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: .26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    borderColor: '#ddd',
    borderWidth: .5,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'openSansBold',
    fontSize: 22,
    textAlign: 'right',
    color: '#fff',
    shadowColor: '#000',
    shadowOpacity: .6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3
  }
})

export default GridTile
