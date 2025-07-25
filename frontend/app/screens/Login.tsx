import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/RootStackParamList';
import React, { useState, useContext } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
	const { login } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [agree, setAgree] = useState(false);

	const handleLogin = async () => {
		if (!email || !password || !agree) {
			alert('Please fill in all fields and agree to the terms.');
			return;
		}
		//await login(email, password);
		navigation.navigate('Home');
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.ribbons}>
				<View style={styles.ribbonDark} />
				<View style={styles.ribbonLight} />
			</View>

			<Image
				source={require('../../assets/images/Mini Logo.png')}
				style={styles.logo}
				resizeMode="contain"
			/>

			<Text style={styles.header}>Log-in</Text>

			<TextInput
				style={styles.input}
				placeholder="email or username"
				placeholderTextColor="#aaa"
				value={email}
				onChangeText={setEmail}
			/>

			<View style={styles.passwordContainer}>
				<TextInput
					style={styles.passwordInput}
					placeholder="password"
					placeholderTextColor="#aaa"
					secureTextEntry={!showPassword}
					value={password}
					onChangeText={setPassword}
				/>
				<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
					<Ionicons name={showPassword ? 'eye-off' : 'eye'} size={22} color="#333" />
				</TouchableOpacity>
			</View>

			<View style={styles.checkboxContainer}>
				<TouchableOpacity onPress={() => setAgree(!agree)}>
					<Ionicons
						name={agree ? 'checkbox' : 'square-outline'}
						size={22}
						color="#1c2b59"
					/>
				</TouchableOpacity>
				<Text style={styles.checkboxLabel}>
					I agree to the <Text style={styles.link}>terms and conditions.</Text>
				</Text>
			</View>

			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Log-in</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.buttonSecondary}
				onPress={() => navigation.navigate('Register')}
			>
				<Text style={styles.buttonText}>Register</Text>
			</TouchableOpacity>

			<Text style={styles.orText}>or</Text>

			<TouchableOpacity style={styles.googleButton}>
				<Ionicons name="logo-google" size={20} color="#4267B2" />
				<Text style={styles.googleText}>Log-in with Google</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#7ca9f0',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
	ribbons: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: -1,
	},
	ribbonDark: {
		position: 'absolute',
		width: 300,
		height: 600,
		backgroundColor: '#1c2b59',
		borderRadius: 100,
		transform: [{ rotate: '-45deg' }],
		top: -150,
		left: -100,
	},
	ribbonLight: {
		position: 'absolute',
		width: 300,
		height: 600,
		backgroundColor: '#cdd8f7',
		borderRadius: 100,
		transform: [{ rotate: '-45deg' }],
		top: -100,
		right: -100,
	},
	logo: {
		width: 120,
		height: 120,
		borderRadius: 100,
		backgroundColor: '#1c2b59',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 40,
	},
	header: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#1c2b59',
		marginBottom: 20,
	},
	input: {
		width: '80%',
		height: 40,
		backgroundColor: '#cdd8f7',
		borderRadius: 25,
		paddingHorizontal: 15,
		marginBottom: 5,
	},
	passwordContainer: {
		width: '80%',
		height: 40,
		backgroundColor: '#cdd8f7',
		borderRadius: 25,
		paddingHorizontal: 15,
		marginBottom: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	passwordInput: {
		flex: 1,
		color: '#000',
		fontSize: 16,
		paddingVertical: 0,
	},
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 50,
		marginTop: 10,
	},
	checkboxLabel: {
		marginLeft: 5,
		color: '#1c2b59',
	},
	link: {
		color: '#2c4dbf',
		textDecorationLine: 'underline',
	},
	button: {
		backgroundColor: '#5c6fb0',
		borderRadius: 20,
		width: '40%',
		paddingVertical: 12,
		alignItems: 'center',
		marginBottom: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	buttonSecondary: {
		backgroundColor: '#5c6fb0',
		borderRadius: 20,
		width: '40%',
		paddingVertical: 12,
		alignItems: 'center',
		marginBottom: 25,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	orText: {
		marginVertical: 5,
		color: '#1c2b59',
		marginBottom: 25,
	},
	googleButton: {
		flexDirection: 'row',
		backgroundColor: '#eee',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 30,
		alignItems: 'center',
		gap: 10,
		transform: [{ scale: 0.9 }],
	},
	googleText: {
		color: '#4267B2',
		fontWeight: 'bold',
	},
});
