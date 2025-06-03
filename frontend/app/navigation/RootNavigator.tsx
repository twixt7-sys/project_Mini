// RootNavigator.tsx

import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'

// Screens
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import PostDetailsScreen from '../screens/PostDetailScreen'

const Stack = createStackNavigator()

const RootNavigator = () => {
  const { user } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          // If the user is authenticated, show the app's main flow
          <>
            <Stack.Screen name="Feed" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
          </>
        ) : (
          // If the user isn't authenticated, show the login and register screens
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator