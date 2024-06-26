import React, { useEffect } from 'react'
import { Animated, Easing, StyleSheet, View } from 'react-native'
import Botao from '../components/Botao'

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

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.logo, { transform: [{ rotate: spinAnimation }] }]}
        source={require("../images/logo.png")}
      ></Animated.Image>
      <Botao
        texto = 'Começar'
        proximaTela="Primeira Pergunta"
      ></Botao>
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
  }
})