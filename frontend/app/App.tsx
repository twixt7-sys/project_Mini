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
