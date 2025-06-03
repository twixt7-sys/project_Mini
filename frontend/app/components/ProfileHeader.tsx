import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ProfileHeader = () => {
	return (
		<View style={styles.container}>
			<View style={styles.avatarCircle}>
				<Ionicons name='person' size={32} color='#4a4a4a' />
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.username}>@username</Text>
				<View style={styles.statsRow}>
					<Text style={styles.stat}>👥 99M</Text>
					<Text style={styles.stat}>❤️ 99M</Text>
					<Text style={styles.stat}>📅 12/31/2025</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#aab8ff',
		padding: 20,
		paddingTop: 40,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		marginBottom: 12,
		zIndex: 2
	},
	avatarCircle: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 16,
		borderWidth: 2,
		borderColor: '#5e66ff',
	},
	infoContainer: {
		flex: 1,
	},
	username: {
		fontSize: 22,
		fontWeight: '700',
		color: '#2e2e2e',
		marginBottom: 8,
	},
	statsRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	stat: {
		fontSize: 13,
		color: '#333',
	},
})

export default ProfileHeader
