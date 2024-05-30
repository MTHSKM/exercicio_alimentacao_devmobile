import { View, Text } from 'react-native'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Corpo from '../components/Corpo'
import Perguntas from '../components/Perguntas'
import Rodape from '../components/Rodape'

export default function Decimo() {
    return (
        <View>
            <Cabecalho></Cabecalho>
            <Corpo>
                <Perguntas
                    pergunta="Questão 10) Você costuma tomar refrigerantes com qual frequência?"
                    opcaoTextoA={<Text>Não tomo refrigerantes.</Text>}
                    opcaoTextoB={<Text>Três ou menos vezes por semana</Text>}
                    opcaoTextoC={<Text>Todos os dias.</Text>}
                    proximaTela="Inicio"
                ></Perguntas>
            </Corpo>
            <Rodape></Rodape>
        </View>
    )
}