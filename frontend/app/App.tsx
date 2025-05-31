import React from 'react'
import { AuthProvider } from './context/AuthContext'
import RootNavigator from './navigation/RootNavigator' // or however you're structuring screens

const App = () => {
	return (
		<AuthProvider>
			<RootNavigator />
		</AuthProvider>
	)
}

export default App

// This is the main entry point of the app, where we wrap our navigation in the AuthProvider
// to provide authentication context to all screens.


