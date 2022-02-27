import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    tittle: string
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ tittle, onPress, position = 'br' }: Props) => {
  return (
    <TouchableOpacity 
        style={ [
            styles.fabLocation,
            ( position === 'bl') ? styles.left : styles.right

        ]}
        onPress={ onPress }
        >
        <View style={ styles.fab }>
            <Text style={ styles.fabText }> { tittle } </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    left: {
        left: 25
    },
    right: {
        right: 25
    },
    fab: {
        backgroundColor: '#020024',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})