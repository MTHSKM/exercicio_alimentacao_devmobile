import { View, Text } from 'react-native'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Corpo from '../components/Corpo'
import Perguntas from '../components/Perguntas'
import Rodape from '../components/Rodape'

export default function Quinto() {
    return (
        <View>
            <Cabecalho></Cabecalho>
            <Corpo>
                <Perguntas
                    pergunta="Questão 5) O que você leva de lanche para a escola/trabalho?"
                    opcaoTextoA={<Text>Não levo nenhum tipo de lanche.</Text>}
                    opcaoTextoB={<Text>Chocolates, pães, bolachas recheadas, salgadinhos, refrigerante</Text>}
                    opcaoTextoC={<Text>Frutas, iogurte, barrinha de cereal, sanduíche de pão integral.</Text>}
                    proximaTela="Sexta Pergunta"
                ></Perguntas>
            </Corpo>
            <Rodape></Rodape>
        </View>
    )
}