import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Cabecalho() {
    return (
        <View style={styles.cabecalho}>
            <Image source={require("../images/banner.jpg")}></Image>
        </View>
    )
}

style = StyleSheet.create({
    cabecalho: {
        marginTop: -10
    }
})