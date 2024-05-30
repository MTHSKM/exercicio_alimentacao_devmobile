import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Cabecalho() {
    return (
        <View>
            <Image source={require("../images/banner.jpg")}></Image>
        </View>
    )
}