import { View, Text } from 'react-native'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Corpo from '../components/Corpo'
import Perguntas from '../components/Perguntas'
import Rodape from '../components/Rodape'

export default function Setimo() {
    return (
        <View>
            <Cabecalho></Cabecalho>
            <Corpo>
                <Perguntas
                    pergunta="Questão 7) Quantas vezes por semana você come carne vermelha?"
                    opcaoTextoA={<Text>Todos os dias.</Text>}
                    opcaoTextoB={<Text>Não consumo carne vermelha</Text>}
                    opcaoTextoC={<Text>Duas vezes ou mais</Text>}
                    proximaTela="Oitava Pergunta"
                    id='7'
                ></Perguntas>
            </Corpo>
            <Rodape></Rodape>
        </View>
    )
}