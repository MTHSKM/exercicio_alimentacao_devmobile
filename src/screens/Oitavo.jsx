import { View, Text } from 'react-native'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Corpo from '../components/Corpo'
import Perguntas from '../components/Perguntas'
import Rodape from '../components/Rodape'

export default function Oitavo() {
    return (
        <View>
            <Cabecalho></Cabecalho>
            <Corpo>
                <Perguntas
                    pergunta="Questão 8) Quantas vezes por semana você pratica atividades físicas?"
                    opcaoTextoA={<Text>Todos os dias.</Text>}
                    opcaoTextoB={<Text>Duas vezes ou mais.</Text>}
                    opcaoTextoC={<Text>Nenhuma atividade física.</Text>}
                    proximaTela="Nona Pergunta"
                ></Perguntas>
            </Corpo>
            <Rodape></Rodape>
        </View>
    )
}