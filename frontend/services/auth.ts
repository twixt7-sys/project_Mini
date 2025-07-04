import AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from './config'

export const loginUser = async (email: string, password: string) => {
	const response = await fetch(`${BASE_URL}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	})
	if (!response.ok) throw new Error('Login failed')
	const data = await response.json()
	await AsyncStorage.setItem('token', data.access_token)
	return data
}

export const registerUser = async (user: { username: string; email: string; password: string; confirm_password: string}) => {
	console.log("About to call fetch")
	const response = await fetch(`${BASE_URL}/auth/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})

	const responseText = await response.text()
	console.log("Fetch returned:", response.status)
	console.log("Raw response:", responseText)

	if (!response.ok) {
		throw new Error(`Registration failed: ${response.status} - ${responseText}`)
	}

	const data = JSON.parse(responseText)
	return data
}

