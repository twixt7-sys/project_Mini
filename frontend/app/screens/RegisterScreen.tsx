import React, { useState, useContext } from 'react'
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView
} from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router';

const RegisterScreen = () => {
	const { register } = useContext(AuthContext)
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirm_password, setConfirmPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const handleRegister = async () => {
		if (password !== confirm_password) {
			alert("Passwords do not match.")
			return
		}
		if (!email || !password || !username) return
		await register({ username, email, password, confirm_password })
		alert("Registration complete!")
	}

	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require('../../assets/images/Mini Logo.png')}
				style={styles.logo}
				resizeMode="contain"
			/>
			<Text style={styles.header}>Register</Text>

			<TextInput
				style={styles.input}
				placeholder='username'
				placeholderTextColor='#aaa'
				value={username}
				onChangeText={setUsername}
			/>

			<TextInput
				style={styles.input}
				placeholder='email'
				placeholderTextColor='#aaa'
				value={email}
				onChangeText={setEmail}
			/>

			<View style={styles.passwordContainer}>
				<TextInput
					style={styles.passwordInput}
					placeholder='password'
					placeholderTextColor='#aaa'
					secureTextEntry={!showPassword}
					value={password}
					onChangeText={setPassword}
				/>
				<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
					<Ionicons
						name={showPassword ? 'eye-off' : 'eye'}
						size={22}
						color='#333'
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.passwordContainer}>
				<TextInput
					style={styles.passwordInput}
					placeholder='confirm password'
					placeholderTextColor='#aaa'
					secureTextEntry={!showPassword}
					value={confirm_password}
					onChangeText={setConfirmPassword}
				/>
				<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
					<Ionicons
						name={showPassword ? 'eye-off' : 'eye'}
						size={22}
						color='#333'
					/>
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={styles.button} onPress={handleRegister}>
				<Text style={styles.buttonText}>Register</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/screens/LoginScreen')}>
				<Text style={styles.buttonText}>Back to Login</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#7ca9f0',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
	logo: {
		width: 150,
		height: 150,
		borderRadius: 100,
		backgroundColor: '#1c2b59',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 50,
	},
	header: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#1c2b59',
		marginBottom: 20,
	},
	input: {
		width: '60%',
		height: 50,
		backgroundColor: '#cdd8f7',
		borderRadius: 25,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginBottom: 15,
	},
	passwordContainer: {
		width: '60%',
		height: 50,
		backgroundColor: '#cdd8f7',
		borderRadius: 25,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginBottom: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	passwordInput: {
		flex: 1,
		color: '#000',
	},
	button: {
		backgroundColor: '#5c6fb0',
		borderRadius: 20,
		width: '40%',
		paddingVertical: 12,
		alignItems: 'center',
		marginTop: 50,
		marginBottom: 10,
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
})

export default RegisterScreen
