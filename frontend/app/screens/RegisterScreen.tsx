import React, { useState, useContext } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const RegisterScreen = () => {
	const { register } = useContext(AuthContext)
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleRegister = () => {
		if (!email || !password || !username) return
		register({username, email, password})
	}

	return (
		<View style={{ padding: 20 }}>
			<Text>Username</Text>
			<TextInput value={username} onChangeText={setUsername} />
			<Text>Email</Text>
			<TextInput value={email} onChangeText={setEmail} />
			<Text>Password</Text>
			<TextInput value={password} onChangeText={setPassword} secureTextEntry />
			<Button title='Register' onPress={handleRegister} />
		</View>
	)
}

export default RegisterScreen
