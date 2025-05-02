import React, { createContext, useState, useEffect, ReactNode } from 'react'

type AuthContextType = {
	userToken: string | null
	login: (token: string) => void
	signOut: () => void
}

export const AuthContext = createContext<AuthContextType>({
	userToken: null,
	login: () => {},
	signOut: () => {},
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

	const signOut = () => {
		setUserToken(null)
		// clear persisted token
	}

	// optional: retrieve token from storage on first load
	useEffect(() => {
		// retrieveTokenFromStorage()
	}, [])

	return (
		<AuthContext.Provider value={{ userToken, login, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}
