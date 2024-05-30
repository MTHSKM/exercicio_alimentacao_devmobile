import { View, Text } from 'react-native'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Corpo from '../components/Corpo'
import Perguntas from '../components/Perguntas'
import Rodape from '../components/Rodape'

export default function Nono() {
  return (
    <View>
            <Cabecalho></Cabecalho>
            <Corpo>
                <Perguntas
                    pergunta="Questão 9) Qual tipo de gordura é mais utilizado na sua casa para cozinhar os alimentos?"
                    opcaoTextoA={<Text>Gordura animal ou manteiga.</Text>}
                    opcaoTextoB={<Text>Óleos vegetais (óleo de soja, girassol, algodão, canola).</Text>}
                    opcaoTextoC={<Text>Margarina ou gordura vegetal.</Text>}
                    proximaTela="Décima Pergunta"
                ></Perguntas>
            </Corpo>
            <Rodape></Rodape>
        </View>
  )
}