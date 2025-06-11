import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Txt from './Txt'
import { User } from '../types/User'

type ProfileHeaderProps = {
	user: User
}

const statData = [
	{ icon: 'camera', label: '99M' },
	{ icon: 'link', label: '99M' },
	{ icon: 'calendar', label: '12/31/2025' }
]

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
	return (
		<>
			<View style={styles.avatarCircle}>
				<Ionicons name='person' size={32} color='#4a4a4a' />
			</View>

			<View style={[styles.bgRibbon, { backgroundColor: '#DDF', marginLeft: -125, zIndex: 7 }]} />
			<View style={[styles.bgRibbon, { backgroundColor: '#99E', marginLeft: -75, zIndex: 6 }]} />

			<View style={styles.container}>
				<View style={styles.infoContainer}>
					<View style={{ marginBottom: 5 }}>
						<Txt text={user.username} style_={styles.username} />
						<Txt text={user.email} style_={styles.email} />
					</View>

					<View style={styles.statsRow}>
						{statData.map((stat, index) => (
							<View key={index} style={styles.capsule}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Ionicons name={stat.icon as any} size={14} color="#5555D0" style={{ marginRight: 4 }} />
									<Txt text={stat.label} style_={styles.stat} />
								</View>
							</View>
						))}
					</View>
				</View>
			</View>
		</>
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
		justifyContent: 'center',
		backgroundColor: '#5555D0',
		height: 70
	},
	bgRibbon: {
		width: 300,
		height: 75,
		position: 'absolute',
		top: 0,
		left: 0,
		borderRadius: 25,
		transform: [{ rotate: '-45deg' }],
		marginTop: -37.5,
		shadowColor: '#5555D0',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
		shadowRadius: 50,
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
		zIndex: 100,
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		transform: [{ translateY: 25 }, { translateX: 15 }, { scale: 1.5 }],
	},
	infoContainer: {
		flex: 1,
		transform: [{ translateY: 23 }, { translateX: 113 }]
	},
	username: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#EEF',
		marginBottom: -5,
		marginLeft: 5
	},
	email: {
		fontSize: 16,
		color: '#BBF',
		marginLeft: 7
	},
	statsRow: {
		flexDirection: 'row',
		marginTop: 10
	},
	stat: {
		fontSize: 13,
		color: '#5555D0',
		fontWeight: 'bold',
	},
	capsule: {
		backgroundColor: '#DDF',
		borderRadius: 20,
		paddingVertical: 3,
		paddingHorizontal: 12,
		marginRight: 2,
		transform: [{ scale: 0.9 }]
	}
})

export default ProfileHeader
