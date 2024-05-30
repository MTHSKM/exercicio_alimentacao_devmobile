import { View, Text } from 'react-native'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Corpo from '../components/Corpo'
import Perguntas from '../components/Perguntas'
import Rodape from '../components/Rodape'

export default function Quarto() {
  return (
    <View>
            <Cabecalho></Cabecalho>
            <Corpo>
                <Perguntas
                    pergunta="Questão 4) Qual é, em média, a quantidade de frutas que você consome por dia?"
                    opcaoTextoA="Não como frutas nem bebo suco natural de frutas todos os dias."
                    opcaoTextoB={<Text>{'\n'}Três unidades.{'\n'}</Text>}
                    opcaoTextoC={<Text>{'\n'}Duas ou menos unidades.{'\n'}</Text>}
                    proximaTela="Quinta Pergunta"
                ></Perguntas>
            </Corpo>
            <Rodape></Rodape>
        </View>
  )
}