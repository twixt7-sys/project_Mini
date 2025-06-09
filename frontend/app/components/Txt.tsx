import react from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Txt = ({ text, style_ }: { text: string; style_?: object }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, style_]}>{text}</Text>
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
        fontFamily: 'Roboto, "Segoe UI", Arial, sans-serif',
        color: '#fff',
    },
})

export default Txt