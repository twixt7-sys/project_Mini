import React, { useState, useRef } from 'react'
import {
	View,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Text,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PostCard from '../components/PostCard'
import ProfileHeader from '../components/ProfileHeader'
import { Animated } from 'react-native'
import dummyPosts from '../dummy_data/dummy_posts'
import dummyUsers from '../dummy_data/dummy_users'

const FABButton = ({
	style,
	icon,
	shape = 'circle',
}: {
	style: any
	icon: string
	shape?: 'circle' | 'square'
}) => (
	<Animated.View style={[styles.fabOption, style]}>
		<TouchableOpacity
			style={[
				styles.fabButton,
				shape === 'square' && styles.fabButtonSquare,
			]}>
			<Ionicons name={icon} size={20} color='#fff' />
		</TouchableOpacity>
	</Animated.View>
)

const HomeScreen = () => {
	const [isFabOpen, setIsFabOpen] = useState(false)
	const animationVertical = useRef(new Animated.Value(0)).current
	const animationHorizontal = useRef(new Animated.Value(0)).current

	const toggleFabMenu = () => {
		const toValue = isFabOpen ? 0 : 1

		Animated.parallel([
			Animated.spring(animationVertical, {
				toValue,
				useNativeDriver: true,
			}),
			Animated.spring(animationHorizontal, {
				toValue,
				useNativeDriver: true,
			}),
		]).start()

		setIsFabOpen(!isFabOpen)
	}

	// Config for vertical buttons
	const verticalOffset = -10
	const verticalFABs = [
		{ distance: -70 + verticalOffset, icon: 'pencil' },
		{ distance: -140 + verticalOffset, icon: 'image' },
		{ distance: -210 + verticalOffset, icon: 'test' },
		{ distance: -280 + verticalOffset, icon: 'test' },
	]

	// Config for horizontal buttons
	const horizontalFABs = [
		{ distance: -70, icon: 'settings' },
		{ distance: -140, icon: 'earth' },
		{ distance: -210, icon: 'search' },
		{ distance: -280, icon: 'home' },
	]

	const getAnimatedStyle = (distance: number, axis: 'x' | 'y', animation: Animated.Value) => ({
		transform: [
			{
				[axis === 'x' ? 'translateX' : 'translateY']: animation.interpolate({
					inputRange: [0, 1],
					outputRange: [0, distance],
				}),
			},
		],
		opacity: animation,
	})

	return (
		<View style={styles.container}>
			<ProfileHeader user={dummyUsers[0]} />

			<ScrollView contentContainerStyle={{ paddingTop: 40, paddingBottom: 100 }}>
				{dummyPosts.map((p) => (
					<PostCard key={p.id} post={p} />
				))}
			</ScrollView>

			<>
				{verticalFABs.map((fab, index) => (
					<FABButton
						key={`v-${index}`}
						style={getAnimatedStyle(fab.distance, 'y', animationVertical)}
						icon={fab.icon}
					/>
				))}

				{horizontalFABs.map((fab, index) => (
					<FABButton
						key={`h-${index}`}
						style={getAnimatedStyle(fab.distance, 'x', animationHorizontal)}
						icon={fab.icon}
						shape='square'
					/>
				))}

				<TouchableOpacity style={[styles.fab, { backgroundColor: isFabOpen ? '#F77' : '#77F' }]} onPress={toggleFabMenu}>
					<Ionicons name={isFabOpen ? 'close' : 'add'} size={28} color='#fff' />
				</TouchableOpacity>
			</>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#314a73',
		paddingHorizontal: 16,
	},
	fab: {
		position: 'absolute',
		right: 20,
		bottom: 20,
		padding: 16,
		borderRadius: 40,
		elevation: 6,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		zIndex: 10,
		transform: [{translateX: -4}, {translateY: -9}, {scale: 1.1}]
	},
	fabOption: {
		position: 'absolute',
		right: 27,
		bottom: 20,
	},
	fabButton: {
		width: 56,
		height: 56,
		borderRadius: 28,
		backgroundColor: '#5e66ff',
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 4,
		marginBottom: 10,
	},
	fabButtonSquare: {
		borderRadius: 12,
	},
})

export default HomeScreen
