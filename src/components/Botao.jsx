import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Botao({ texto, proximaTela }) {

    const navigation = useNavigation()

    function handlerClick(nomeDaTela) {
        navigation.navigate(nomeDaTela)
    }

    return (
        <TouchableOpacity style={styles.botao} onPress={() => handlerClick(proximaTela)}>
            <Text style={styles.botaoTexto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 20,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width: '40%'
    },
    botaoTexto: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})