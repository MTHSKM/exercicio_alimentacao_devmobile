import { View, Text } from 'react-native'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Corpo from '../components/Corpo'
import Perguntas from '../components/Perguntas'
import Rodape from '../components/Rodape'

export default function Sexto() {
    return (
        <View>
            <Cabecalho></Cabecalho>
            <Corpo>
                <Perguntas
                    pergunta="Questão 6) Você consome algum tipo de verdura ou leguma todos os dias?"
                    opcaoTextoA={<Text>Não consumo verdura nem legumes.</Text>}
                    opcaoTextoB={<Text>Duas ou menos vezes por semana.</Text>}
                    opcaoTextoC={<Text>Todos os dias.{'\n'}</Text>}
                    proximaTela="Sétima Pergunta"
                    id='6'
                ></Perguntas>
            </Corpo>
            <Rodape></Rodape>
        </View>
    )
}