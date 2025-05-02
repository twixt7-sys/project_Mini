import React, { createContext, useState, useEffect, ReactNode } from 'react'

type AuthContextType = {
	userToken: string | null
	login: (token: string) => void
	logout: () => void
	register: (user: { username: string; email: string; password: string }) => void
}

export const AuthContext = createContext<AuthContextType>({
	userToken: null,
	login: () => {},
	logout: () => {},
	register: () => {},
})

type Props = {
	children: ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
	const [userToken, setUserToken] = useState<string | null>(null)

	const login = (token: string) => {
		setUserToken(token)
		// optionally persist the token with AsyncStorage here
	}

	const logout = () => {
		setUserToken(null)
		// clear persisted token
	}

	const register = async (user: { username: string; email: string; password: string }) => {
		try {
			// make API call to register the user
			// const response = await api.register(user)
			// setUserToken(response.token)
			// optionally persist the token with AsyncStorage here
		} catch (error) {
			console.error('Registration failed', error)
		}
	}

	// optional: retrieve token from storage on first load
	useEffect(() => {
		// retrieveTokenFromStorage()
	}, [])

	return (
		<AuthContext.Provider value={{ userToken, login, logout, register }}>
			{children}
		</AuthContext.Provider>
	)
}
