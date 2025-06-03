import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { loginUser, registerUser } from '../../services/auth'

type AuthContextType = {
	userToken: string | null
	login: (email: string, password: string) => Promise<void>
	logout: () => void
	register: (user: { username: string; email: string; password: string; confirm_password: string }) => Promise<void>
	user?: {username: string; email: string	}
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
			const token = data.token
			setUserToken(token)
			// optionally persist token in AsyncStorage
		} catch (error) {
			console.error('Login failed', error)
		}
	}

	const register = async (user: { username: string; email: string; password: string; confirm_password: string }) => {
		try {
			const data = await registerUser(user)
			const token = data.token
			setUserToken(token)
			alert("Registration successful! (auth context)")
			// optionally persist token in AsyncStorage
		} catch (error) {
			console.error('Registration failed', error)
		}
	}

		const logout = () => {
		setUserToken(null)
		// clear persisted token
	}

	const user = {
		username: 'exampleUser',
		email: '	example@example.com',
	}

	// optional: retrieve token from storage on first load

	// optional: retrieve token from storage on first load
	useEffect(() => {
		// retrieveTokenFromStorage()
	}, [])

	return (
		<AuthContext.Provider value={{ userToken, login, logout, register, user }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider