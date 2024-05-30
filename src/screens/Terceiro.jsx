import { View, Text } from 'react-native'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Corpo from '../components/Corpo'
import Perguntas from '../components/Perguntas'
import Rodape from '../components/Rodape'

export default function Terceiro() {
    return (
        <View>
            <Cabecalho></Cabecalho>
            <Corpo>
                <Perguntas
                    pergunta="Questão 3) Como costuma ser seu café da manhã?"
                    opcaoTextoA="Café preto e no máximo um biscoitinho."
                    opcaoTextoB="Café com leite, pão branco, margarina, queijo e presunto."
                    opcaoTextoC="Frutas e sucos naturais, cereais integrais, tapiod, pão integral."
                    proximaTela="Quarta Pergunta"
                ></Perguntas>
            </Corpo>
            <Rodape></Rodape>
        </View>
    )
}