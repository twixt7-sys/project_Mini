import React, { useEffect } from 'react';
import { Text, View, Button, Image, StyleSheet, Dimensions } from 'react-native';
import 'expo-router/entry';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const HomeScreen = () => {

	const navigator = useNavigation();

	useEffect(() => {
		setTimeout(() => {
			router.push('/screens/LoginScreen');
		}, 2000);
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					source={require('../assets/images/Mini Logo.png')}
					style={styles.logo}
					resizeMode="contain"
				/>
			</View>
		</View>
	);
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#7ca9f0',
	},
	logoContainer: {
		width: width * 0.25,
		height: width * 0.25,
		borderRadius: width,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 6,
		elevation: 10,
	},
	logo: {
		width: width * 0.30,
		height: width * 0.3,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	description: {
		fontSize: 18,
		marginVertical: 20,
	},
});

export default HomeScreen;
