import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Perguntas({ pergunta, opcaoTextoA, opcaoTextoB, opcaoTextoC, proximaTela }) {

    const navigation = useNavigation()

    const handlerClick = (nomeDaTela) => {
        navigation.navigate(nomeDaTela)
    }

    return (
        <View style={styles.perguntaContainer}>
            <Text style={styles.pergunta}>{pergunta}</Text>
            <TouchableOpacity style={styles.botao} onPress={() => {handlerClick(proximaTela)}}>
                <Text style={styles.opcaoBotao}>A)</Text>
                <Text style={styles.opcaoTexto}>{opcaoTextoA}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => {handlerClick(proximaTela)}}>
                <Text style={styles.opcaoBotao}>B)</Text>
                <Text style={styles.opcaoTexto}>{opcaoTextoB}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => {handlerClick(proximaTela)}}>
                <Text style={styles.opcaoBotao}>C)</Text>
                <Text style={styles.opcaoTexto}>{opcaoTextoC}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    perguntaContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pergunta: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 50
    },
    botao: {
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: 300
    },
    opcaoBotao: {
        fontSize: 18,
        color: '#fff'
    },
    opcaoTexto: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 15
    },
});
