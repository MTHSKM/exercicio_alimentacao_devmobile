import { View, Text, StyleSheet, Linking } from 'react-native'
import React from 'react'

export default function Rodape() {
    return (
        <View>
            <View style={styles.separador}></View>
            <View style={styles.rodape}>
                <Text style={styles.rodapeTexto}>Desenvolvido por{''}
                    <Text style={styles.hiperLink} onPress={() => { Linking.openURL("https://github.com/MTHSKM?tab=repositories") }}> MTHSKM</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rodape: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        backgroundColor: 'black',
        height: 100
    },
    rodapeTexto: {
        fontSize: 16,
        color: 'white'
    },
    hiperLink: {
        color: 'lightblue'
    },
    separador: {
        height: 1,
        backgroundColor: 'white'
    }
});