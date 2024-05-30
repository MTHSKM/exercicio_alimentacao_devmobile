import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Inicio from './src/screens/Inicio'
import Primeiro from './src/screens/Primeiro'
import { NavigationContainer } from '@react-navigation/native'
import RespostaProvider from './src/context/RespostaContext'
import Segundo from './src/screens/Segundo'
import Terceiro from './src/screens/Terceiro'
import Quarto from './src/screens/Quarto'
import Quinto from './src/screens/Quinto'
import Sexto from './src/screens/Sexto'
import Setimo from './src/screens/Setimo'
import Oitavo from './src/screens/Oitavo'
import Nono from './src/screens/Nono'
import Decimo from './src/screens/Decimo'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <RespostaProvider>
        <Stack.Navigator>
          <Stack.Screen name='Inicio' component={Inicio}></Stack.Screen>
          <Stack.Screen name='Primeira Pergunta' component={Primeiro}></Stack.Screen>
          <Stack.Screen name='Segunda Pergunta' component={Segundo}></Stack.Screen>
          <Stack.Screen name='Terceira Pergunta' component={Terceiro}></Stack.Screen>
          <Stack.Screen name='Quarta Pergunta' component={Quarto}></Stack.Screen>
          <Stack.Screen name='Quinta Pergunta' component={Quinto}></Stack.Screen>
          <Stack.Screen name='Sexta Pergunta' component={Sexto}></Stack.Screen>
          <Stack.Screen name='Sétima Pergunta' component={Setimo}></Stack.Screen>
          <Stack.Screen name='Oitava Pergunta' component={Oitavo}></Stack.Screen>
          <Stack.Screen name='Nona Pergunta' component={Nono}></Stack.Screen>
          <Stack.Screen name='Décima Pergunta' component={Decimo}></Stack.Screen>
        </Stack.Navigator>
      </RespostaProvider>
    </NavigationContainer>
  )
}