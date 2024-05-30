import { View, Text } from 'react-native'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Corpo from '../components/Corpo'
import Perguntas from '../components/Perguntas'
import Rodape from '../components/Rodape'

export default function Segundo() {
    return (
        <View>
            <Cabecalho></Cabecalho>
            <Corpo>
                <Perguntas
                    pergunta="Questão 2) Quantas vezes por dia você come? (Conte também os lanches da manhã e da tarde)"
                    opcaoTextoA="Uma ou duas vezes por dia."
                    opcaoTextoB="De três a quatro vezes por dia."
                    opcaoTextoC="Mais de cinco vezes por dia."
                    proximaTela="Terceira Pergunta"
                ></Perguntas>
            </Corpo>
            <Rodape></Rodape>
        </View>
    )
}