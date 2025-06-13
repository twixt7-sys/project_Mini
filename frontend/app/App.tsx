import React from 'react'
import RootNavigator from './RootNavigator'
import AuthProvider from './context/AuthContext'
import UserProvider from './context/UserContext'

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