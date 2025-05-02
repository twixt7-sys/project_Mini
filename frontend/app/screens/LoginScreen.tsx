import React, { useState, useContext } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const LoginScreen = () => {
	const { login } = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		if (!email || !password) return
		login(email)
	}

	return (
		<View style={{ padding: 20 }}>
			<Text>Email</Text>
			<TextInput value={email} onChangeText={setEmail} />
			<Text>Password</Text>
			<TextInput value={password} onChangeText={setPassword} secureTextEntry />
			<Button title='Login' onPress={handleLogin} />
		</View>
	)
}

export default LoginScreen
