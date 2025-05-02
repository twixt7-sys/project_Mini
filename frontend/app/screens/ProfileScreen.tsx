import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const ProfileScreen = () => {
	const { user, logout } = useContext(AuthContext)

	return (
		<View style={{ padding: 20 }}>
			<Text>Username: {user?.username}</Text>
			<Text>Email: {user?.email}</Text>
			<Button title='Logout' onPress={logout} />
		</View>
	)
}

export default ProfileScreen
