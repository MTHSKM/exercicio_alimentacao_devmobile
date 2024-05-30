import { View, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const windowHeight = Dimensions.get('window').height;

export default function Corpo({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    height: windowHeight * 0.535
  }
})
