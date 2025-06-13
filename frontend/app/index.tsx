import { AppRegistry } from 'react-native'
import App from './App'
import React from 'react'

const Root = () => {
	return (
		<App/>
	)
}

AppRegistry.registerComponent("ProjectMini", () => Root)

export default Root