import React, { useMemo } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Txt from './Txt'
import { User } from '../types/User'
import { transform } from '@babel/core'

type ProfileHeaderProps = {
	user: User
	scrollY: Animated.Value
}


const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, scrollY }) => {
	const statData = [
		{ icon: 'document', label: '99'},
		{ icon: 'people', label: '99' },
		{ icon: 'people-outline', label: '99' }
	]

	const avatarAnimatedStyle = useMemo(() => ({
		transform: [
			{ translateY: scrollY.interpolate({ inputRange: [0, 100], outputRange: [25, -5], extrapolate: 'clamp' }) },
			{ translateX: scrollY.interpolate({ inputRange: [0, 100], outputRange: [15, 0], extrapolate: 'clamp' }) },
			{ scale: scrollY.interpolate({ inputRange: [0, 100], outputRange: [1.5, 0.7], extrapolate: 'clamp' }) }
		],
	}), [scrollY])

	const ribbonAnimatedStyle = useMemo(() => ({
		opacity: scrollY.interpolate({ inputRange: [0, 60], outputRange: [1, 1], extrapolate: 'clamp' }),
		transform: [
			{ scale: scrollY.interpolate({ inputRange: [0, 100], outputRange: [1, 0.95], extrapolate: 'clamp' }) },
			{ translateX: scrollY.interpolate({ inputRange: [0, 100], outputRange: [0, -100], extrapolate: 'clamp' }), },
			{ rotate: '-45deg' }
		]
	}), [scrollY])

	const containerTranslateY = useMemo(() =>
		scrollY.interpolate({ inputRange: [0, 100], outputRange: [-85, -103], extrapolate: 'clamp' })
	, [scrollY])

	const infoAnimatedStyle = useMemo(() => ({
		transform: [
			{ translateY: scrollY.interpolate({ inputRange: [0, 100], outputRange: [38, 27], extrapolate: 'clamp' }) },
			{ translateX: scrollY.interpolate({ inputRange: [0, 100], outputRange: [113 ,10], extrapolate: 'clamp' }) },
			{ scale: scrollY.interpolate({ inputRange: [0, 100], outputRange: [1, 0.70], extrapolate: 'clamp' }) }
		]
	}), [scrollY])

	const capsulesOpacity = useMemo(() =>
		scrollY.interpolate({ inputRange: [0, 80], outputRange: [1, 0], extrapolate: 'clamp' })
	, [scrollY])

	return (
		<View style={styles.root}>
			<Animated.View style={[styles.avatarCircle, avatarAnimatedStyle]}>
				<Ionicons name='person' size={32} color='#4a4a4a' />
			</Animated.View>

			<Animated.View style={[styles.bgRibbon, { backgroundColor: '#DDF', marginLeft: -125, zIndex: 7 }, ribbonAnimatedStyle]} />
			<Animated.View style={[styles.bgRibbon, { backgroundColor: '#99E', marginLeft: -75, zIndex: 6 }, ribbonAnimatedStyle]} />

			{/*Notifications Ribbon*/}
			<Animated.View style={[styles.bgRibbon, { backgroundColor: '#338', marginLeft: 290, zIndex: 5 }, ribbonAnimatedStyle,
				{transform: [{ translateX: scrollY.interpolate({ inputRange: [0, 100], outputRange: [40, -20], extrapolate: 'clamp' }) },
							{ translateY: scrollY.interpolate({ inputRange: [0, 100], outputRange: [60, 30], extrapolate: 'clamp' })  },
							{ scale: scrollY.interpolate({ inputRange: [0, 100], outputRange: [1.05, 0.55], extrapolate: 'clamp' })  },], }
			]}>
				<View style={{transform: [], margin: 20}}>
					<Ionicons name='notifications' size={32} color='#fff'/>
				</View>
			</Animated.View>

			<Animated.View style={[styles.container, { transform: [{ translateY: containerTranslateY }] }]}>
				<Animated.View style={[styles.infoContainer]}>
					<Animated.View style={{
						transform: [{ scale: scrollY.interpolate({ inputRange: [0, 100], outputRange: [1, 0.7], extrapolate: 'clamp' }) },
					{ translateY: scrollY.interpolate({ inputRange: [0, 100], outputRange: [38, 55], extrapolate: 'clamp' }) },
					{ translateX: scrollY.interpolate({ inputRange: [0, 100], outputRange: [113, 14], extrapolate: 'clamp' }) }] }}>
						<Txt text={user.username} style_={styles.username} />
						<Txt text={user.email} style_={styles.email} />
					</Animated.View>

					<Animated.View style={[styles.statsRow, { opacity: capsulesOpacity, marginLeft: 105,
						transform: [{ translateY: 45}]
					 }]}>
						{statData.map((stat, index) => (
							<View key={index} style={styles.capsule}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Ionicons name={stat.icon as any} size={14} color="#5555D0" style={{ marginRight: 4 }} />
									<Txt text={stat.label} style_={styles.stat} />
								</View>
							</View>
						))}
					</Animated.View>
				</Animated.View>
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 5,
	},
	container: {
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#5555D0',
		transform: [{ translateY: -75 }],
	},
	bgRibbon: {
		width: 300,
		height: 75,
		position: 'absolute',
		top: 0,
		left: 0,
		borderRadius: 50,
		marginTop: -37.5,
		shadowColor: '#000',
		shadowOpacity: 0.5,
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 100,
		elevation: 3,
	},
	avatarCircle: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 16,
		marginLeft: 15,
		borderWidth: 5,
		borderColor: '#5e66ff',
		zIndex: 100,
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
	},
	infoContainer: {
		flex: 1,
		transform: [{ translateY: -10 }],
	},
	username: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#EEF',
		marginBottom: -5,
		marginLeft: 5,
	},
	email: {
		fontSize: 16,
		color: '#BBF',
		marginLeft: 7,
	},
	statsRow: {
		flexDirection: 'row',
		marginTop: 10,
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
		paddingHorizontal: 8,
		marginRight: 0,
		transform: [{ scale: 0.9 }],
	},
})

export default ProfileHeader
