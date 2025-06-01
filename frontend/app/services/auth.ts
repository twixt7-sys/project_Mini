// services/auth.ts
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
	return await response.json()
}

export const registerUser = async (user: { username: string; email: string; password: string; confirmPassword: string}) => {
	const response = await fetch(`${BASE_URL}/auth/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
	if (!response.ok) throw new Error('Registration failed')
	return await response.json()
}
