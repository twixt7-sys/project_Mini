// _layout.tsx
import { Platform } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { TamaguiProvider } from 'tamagui'
import { tamaguiConfig } from '../tamagui.config'
import { AuthProvider } from './context/AuthContext' // <-- make sure path is correct

export default function RootLayout() {
	const colorScheme = useColorScheme()

	return (
		<AuthProvider>
			<TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
				<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
					<Stack>
						<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
						<Stack.Screen name="modal" options={{ presentation: 'modal' }} />
					</Stack>
				</ThemeProvider>
			</TamaguiProvider>
		</AuthProvider>
	)
}
