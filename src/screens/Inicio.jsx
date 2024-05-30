import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Animated, Easing, StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default function AnimatedLogo() {
  const spinValue = new Animated.Value(0)

  useEffect(() => {
    spin()
  }, [])

  const spin = () => {
    spinValue.setValue(0)
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start(() => spin())
  }

  const spinAnimation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.logo, { transform: [{ rotate: spinAnimation }] }]}
        source={require("../images/logo.png")}
      ></Animated.Image>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Primeira Pergunta')}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '33%',
    height: '33%',
    resizeMode: 'contain'
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '40%'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
})