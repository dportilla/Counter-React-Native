import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fab } from '../componets/Fab'

export const CounterScreen = () => {

    const [count, setCount] = useState(0)

  return (
    <View style={ styles.container }>
        <Text style={ styles.tittle }>
            Contador: { count }</Text>

            <Fab 
                tittle="+1"
                onPress={ () => setCount( count + 1 ) }
            />

            <Fab 
                tittle="-1"
                position='bl'
                onPress={ () => setCount( count - 1 ) }
            />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    tittle: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    }
})