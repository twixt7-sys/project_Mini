import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Txt from './Txt'

const ProfileHeader = () => {
	return (
		<View style={styles.container}>
			<View style={styles.avatarCircle}>
				<Ionicons name='person' size={32} color='#4a4a4a' />
			</View>
			<View style={styles.infoContainer}>
				<Txt text={"Bloo"} style_={styles.username} />
				<View style={styles.statsRow}>
					<View style={styles.capsule1}>
						<Txt text={"📸 99M"} style_={styles.stat}/>
					</View>
					<View style={styles.capsule2}>
						<Txt text={"🔗 99M"} style_={styles.stat}/>
					</View>
					<View style={styles.capsule3}>
						<Txt text={"📅 12/31/2025"} style_={styles.stat}/>
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
		backgroundColor: '#FFF',
		margin: 15,
		marginTop: 40,
		borderRadius: 50,
		marginBottom: 12,
		borderColor: '#5e66ff',
		borderWidth: 5
	},
	avatarCircle: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 16,
		borderWidth: 5,
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
		backgroundColor: '#d0d0ff',
		borderRadius: 20,
		paddingVertical: 6,
		paddingHorizontal: 12,
		marginRight: 8,
		transform: [{ scale: 0.9 }],
	},
	capsule2: {
		backgroundColor: '#d0d0ff',
		borderRadius: 20,
		paddingVertical: 6,
		paddingHorizontal: 12,
		marginRight: 8,
		transform: [{ scale: 0.9 }],
	},
	capsule3: {
		backgroundColor: '#d0d0ff',
		borderRadius: 20,
		paddingVertical: 6,
		paddingHorizontal: 12,
		transform: [{ scale: 0.9 }],
	},
})

export default ProfileHeader