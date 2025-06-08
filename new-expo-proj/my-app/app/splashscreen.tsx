import React from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'

const SplashScreen: React.FC = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/logo.png')} // Replace with your logo path
				style={styles.logo}
				resizeMode="contain"
			/>
			<Text style={styles.title}>Legacy App</Text>
			<ActivityIndicator size="large" color="#4F46E5" style={styles.loader} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 150,
		height: 150,
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#4F46E5',
	},
	loader: {
		marginTop: 20,
	},
})

export default SplashScreen
