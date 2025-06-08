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
				<Text style={styles.username}>Bloo</Text>
				<View style={styles.statsRow}>
					<View style={styles.capsule1}>
						<Text style={styles.stat}>📸 99M</Text>
					</View>
					<View style={styles.capsule2}>
						<Text style={styles.stat}>🔗 99M</Text>
					</View>
					<View style={styles.capsule3}>
						<Text style={styles.stat}>📅 12/31/2025</Text>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 5,
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#aab8ff',
		margin: 15,
		marginTop: 40,
		borderRadius: 50,
		marginBottom: 12
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
		flexDirection: 'row'
	},
	stat: {
		fontSize: 13,
		color: '#333',
	},
	capsule1: {
		backgroundColor: '#e0e0ff',
		borderRadius: 20,
		paddingVertical: 6,
		paddingHorizontal: 12,
		marginRight: 8,
	},
	capsule2: {
		backgroundColor: '#d0d0ff',
		borderRadius: 20,
		paddingVertical: 6,
		paddingHorizontal: 12,
		marginRight: 8,
	},
	capsule3: {
		backgroundColor: '#c0c0ff',
		borderRadius: 20,
		paddingVertical: 6,
		paddingHorizontal: 12,
	},
})

export default ProfileHeader
