import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { loginUser, registerUser } from '../../services/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

type AuthContextType = {
	userToken: string | null
	login: (email: string, password: string) => Promise<void>
	logout: () => void
	register: (user: { username: string; email: string; password: string; confirm_password: string }) => Promise<void>
	user?: {username: string; email: string	} | null
}

export const AuthContext = createContext<AuthContextType>({
	userToken: null,
	login: () => Promise.resolve(),
	logout: () => {},
	register: () => Promise.resolve(),
	user: undefined,
})

type Props = {
	children: ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
	const [userToken, setUserToken] = useState<string | null>(null)

	const login = async (email: string, password: string) => {
		try {
			const data = await loginUser(email, password)
			const token = data.access_token
			setUserToken(token)
			setUser(data.user)
			await AsyncStorage.setItem('userToken', token)
		} catch (error) {
			console.error('Login failed', error)
		}
	}

	const register = async (user: { username: string; email: string; password: string; confirm_password: string }) => {
		try {
			const data = await registerUser(user)
			const token = data.access_token
			setUserToken(token)
			setUser(data.user)
			await AsyncStorage.setItem('userToken', token)
		} catch (error) {
			console.error('Registration failed', error)
		}
	}

	const logout = async () => {
		setUserToken(null)
		await AsyncStorage.removeItem('userToken')
	}

	const [user, setUser] = useState<{ username: string; email: string } | null>(null)

	// optional: retrieve token from storage on first load
	useEffect(() => {
		const loadToken = async () => {
			const storedToken = await AsyncStorage.getItem('userToken')
			if (storedToken) {
				setUserToken(storedToken)
				// optionally fetch user profile here to setUser
			}
		}
		loadToken()
	}, [])

	return (
		<AuthContext.Provider value={{ userToken, login, logout, register, user }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider