import React from 'react'
import RootNavigator from './navigation/RootNavigator'
import AuthProvider from './context/AuthContext'

const App = () => {
	return(
		<AuthProvider>
			<RootNavigator />
		</AuthProvider>
	)
}

export default App