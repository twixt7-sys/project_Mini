import react from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Txt = ({ text, style }: { text: string; style?: object }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontFamily: 'Roboto, "Segoe UI", Arial, sans-serif',
        color: '#fff',
    },
})

export default Txt