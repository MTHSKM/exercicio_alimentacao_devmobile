import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React, { useContext } from 'react'
import { RespostaContext } from '../context/RespostaContext'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import Corpo from '../components/Corpo'
import Botao from '../components/Botao'

const windowHeight = Dimensions.get('window').height;

export default function Feedback() {

    const { resposta, setResposta } = useContext(RespostaContext)

    function renderRespostas() {
        const respostas = []
        for (let i = 1; i <= 10; i++) {
            if (resposta[`q${i}`]) {
                respostas.push(<Text>{`Questão ${i}: ${resposta[`q${i}`]}`}</Text>)
            }
        }
        respostas.push(<Text>{`Pontuação Total: ${calcularPontuacao()}`}</Text>)
        return respostas
    }

    function calcularPontuacao() {
        let pontuacao = 0

        pontuacao += resposta.q1 === 'A' ? 0 : resposta.q1 === 'B' ? 1 : 3
        pontuacao += resposta.q2 === 'A' ? 0 : resposta.q2 === 'B' ? 1 : 3
        pontuacao += resposta.q3 === 'A' ? 0 : resposta.q3 === 'B' ? 2 : 3
        pontuacao += resposta.q4 === 'A' ? 0 : resposta.q3 === 'B' ? 3 : 1
        pontuacao += resposta.q5 === 'A' ? 0 : resposta.q3 === 'B' ? 1 : 3
        pontuacao += resposta.q6 === 'A' ? 0 : resposta.q3 === 'B' ? 2 : 3
        pontuacao += resposta.q7 === 'A' ? 1 : resposta.q3 === 'B' ? 0 : 3
        pontuacao += resposta.q8 === 'A' ? 3 : resposta.q3 === 'B' ? 2 : 0
        pontuacao += resposta.q9 === 'A' ? 0 : resposta.q3 === 'B' ? 3 : 1
        pontuacao += resposta.q10 === 'A' ? 3 : resposta.q3 === 'B' ? 1 : 0

        return pontuacao
    }

    function classificarPontuacao() {
        const pontos = calcularPontuacao()

        if (!pontos) {
            Alert.alert('Erro', 'Parece que deu alguma coisa errada, favor contatar o suporte.')
        } else if (pontos <= 10) {
            return <Text style={styles.classificacao}>
                Reflita seus hábitos alimentares, e lembre-se sempre que uma alimentação desregulada pode levar à obesidade,
                diabetes, hipertensão, problemas no coração, desnutrição, entre outros. Reveja sua dieta alimentar e tente melhorar,
                seu corpo e sua saúde agradecem.
            </Text>

        } else if (pontos >= 11 && pontos <= 20) {
            return <Text style={styles.classificacao}>
                Sua alimentação está boa, mas ainda não é a ideal.{'\n'}Analise seus hábitos alimentares e verifique
                o que pode mudar.
            </Text>
        } else if (pontos >= 21) {
            return <Text style={styles.classificacao}>
                Parabéns, você mostrou que sabe cuidade de sua saúde fazendo escolhas inteligentes e quilibradas
            </Text>
        }
    }


    return (
        <View>
            <Cabecalho></Cabecalho>
            <Corpo>
                {/* {renderRespostas()} */}
                <View style={styles.container}>
                    <Text style={styles.pontuacao}>{`Pontuação Total: ${calcularPontuacao()}`}</Text>
                    {classificarPontuacao()}

                    <Botao
                        texto="Recomeçar"
                        proximaTela="Inicio"
                    ></Botao>
                </View>
            </Corpo>
            <Rodape></Rodape>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pontuacao: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25
    },
    classificacao: {
        fontSize: 24,
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 25
    }
})