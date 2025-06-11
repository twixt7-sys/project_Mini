import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { useColorScheme, View } from 'react-native'
import { TamaguiProvider } from 'tamagui'
import { tamaguiConfig } from '../tamagui.config'
import { AuthProvider } from './context/AuthContext'
import { useEffect } from 'react'
import * as SystemUI from 'expo-system-ui'

export default function RootLayout() {
	const colorScheme = useColorScheme()
	return (
		<>
			<View style={{ height: 30, backgroundColor: '#000' }}></View>
			<AuthProvider> {/* Wrapper */}
				<TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
					<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
						<Stack screenOptions={{ headerShown: false }}>
							<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
							<Stack.Screen name="modal" options={{ presentation: 'modal' }} />
						</Stack>
					</ThemeProvider>
				</TamaguiProvider>
			</AuthProvider>
			<View style={{ height: 50, backgroundColor: '#000' }}></View>
		</>
	)
}
