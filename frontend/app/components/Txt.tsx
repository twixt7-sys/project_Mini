import react from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Txt = ({ text, style_ }: { text?: string; style_?: object }) => {
    return (
        <View>
            <Text style={[styles.text, style_]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto, "Segoe UI", Arial, sans-serif',
        color: '#fff',
    },
})

export default Txt