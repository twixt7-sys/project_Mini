import React, { createContext, useState, useEffect, ReactNode } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type AuthContextType = {
	userToken: string | null
	login: (token: string) => Promise<void>
	logout: () => Promise<void>
	isLoading: boolean
}

export const AuthContext = createContext<AuthContextType>({
	userToken: null,
	login: async () => {},
	logout: async () => {},
	isLoading: true,
})

type AuthProviderProps = {
	children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [userToken, setUserToken] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const loadToken = async () => {
			try {
				const token = await AsyncStorage.getItem('userToken')
				if (token) setUserToken(token)
			} catch (err) {
				console.log('Error loading token:', err)
			} finally {
				setIsLoading(false)
			}
		}
		loadToken()
	}, [])

	const login = async (token: string) => {
		try {
			await AsyncStorage.setItem('userToken', token)
			setUserToken(token)
		} catch (err) {
			console.log('Login error:', err)
		}
	}

	const logout = async () => {
		try {
			await AsyncStorage.removeItem('userToken')
			setUserToken(null)
		} catch (err) {
			console.log('Logout error:', err)
		}
	}

	return (
		<AuthContext.Provider value={{ userToken, login, logout, isLoading }}>
			{children}
		</AuthContext.Provider>
	)
}
