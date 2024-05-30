import { View } from 'react-native'
import React from 'react'
import Perguntas from '../components/Perguntas'
import Corpo from '../components/Corpo'
import Rodape from '../components/Rodape'
import Cabecalho from '../components/Cabecalho'

export default function Primeiro() {
    return (
        <View>
            <Cabecalho></Cabecalho>
            <Corpo>
                <Perguntas
                    pergunta="Questão 1) Quantos copos de água você bebe por dia?"
                    opcaoTextoA="Não bebo muita água."
                    opcaoTextoB="Menos de quatro copos."
                    opcaoTextoC="Mais de cinco copos."
                    proximaTela="Segunda Pergunta"
                    id='1'
                ></Perguntas>
            </Corpo>
            <Rodape></Rodape>
        </View>
    )
}