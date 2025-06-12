import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/RootStackParamList';
import React, { useEffect, useRef } from 'react';
import {
	SafeAreaView,
	Image,
	StyleSheet,
	Dimensions,
	Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

export default function SplashScreen({ navigation }: SplashScreenProps) {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 800,
			useNativeDriver: true,
		}).start();

		const timer = setTimeout(() => {
			navigation.navigate("Login");
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Animated.View style={[styles.logoWrapper, { opacity: fadeAnim }]}>
				<Image
					source={require('../assets/images/Mini Logo.png')}
					style={styles.logo}
					resizeMode="contain"
				/>
			</Animated.View>
		</SafeAreaView>
	);
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#7ca9f0',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoWrapper: {
		width: width * 0.35,
		height: width * 0.35,
		borderRadius: width * 0.175,
		backgroundColor: '#ffffff',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 6,
		elevation: 10,
	},
	logo: {
		width: '80%',
		height: '80%',
	},
});