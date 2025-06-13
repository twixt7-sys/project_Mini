import React from 'react'
import RootNavigator from './app/RootNavigator'
import AuthProvider from './app/context/AuthContext'
import UserProvider from './app/context/UserContext'

const App = () => {
	return(
		<AuthProvider>
			{/*<UserProvider>*/}
				<RootNavigator />
			{/*</UserProvider>*/}
		</AuthProvider>
	)
}

export default App