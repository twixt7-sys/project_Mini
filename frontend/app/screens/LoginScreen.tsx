import React, { useState, useContext } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	CheckBox,
} from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { Ionicons } from '@expo/vector-icons'

const LoginScreen = () => {
	const { login } = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [agree, setAgree] = useState(false)

	const handleLogin = () => {
		if (!email || !password || !agree) return
		login(email)
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.logo}>
				<Text style={styles.logoText}>M</Text>
			</View>

			<Text style={styles.header}>Log-in</Text>

			<TextInput
				style={styles.input}
				placeholder='email or username'
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

			<View style={styles.checkboxContainer}>
				<CheckBox value={agree} onValueChange={setAgree} />
				<Text style={styles.checkboxLabel}>
					I agree to the{' '}
					<Text style={styles.link}>terms and conditions.</Text>
				</Text>
			</View>

			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Log-in</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.buttonSecondary}>
				<Text style={styles.buttonText}>Register</Text>
			</TouchableOpacity>

			<Text style={styles.orText}>or</Text>

			<TouchableOpacity style={styles.googleButton}>
				<Ionicons name='logo-google' size={20} color='#4267B2' />
				<Text style={styles.googleText}>Log-in with Google</Text>
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
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: '#1c2b59',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
	},
	logoText: {
		fontSize: 60,
		color: '#cdd8f7',
		fontWeight: 'bold',
	},
	header: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#1c2b59',
		marginBottom: 20,
	},
	input: {
		width: '60%',
		backgroundColor: '#cdd8f7',
		borderRadius: 20,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginBottom: 15,
	},
	passwordContainer: {
		width: '60%',
		backgroundColor: '#cdd8f7',
		borderRadius: 20,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginBottom: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	passwordInput: {
		flex: 1,
		color: '#000',
	},
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	checkboxLabel: {
		marginLeft: 8,
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
		marginBottom: 10,
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	orText: {
		marginVertical: 5,
		color: '#333',
	},
	googleButton: {
		flexDirection: 'row',
		backgroundColor: '#eee',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 20,
		alignItems: 'center',
		gap: 10,
	},
	googleText: {
		color: '#4267B2',
		fontWeight: 'bold',
	},
})

export default LoginScreen
