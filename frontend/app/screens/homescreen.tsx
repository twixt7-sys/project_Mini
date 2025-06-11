import React, { useState, useRef } from 'react'
import {
	View,
	ScrollView,
	RefreshControl,
	StyleSheet,
	TouchableOpacity,
	Text,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PostCard from '../components/PostCard'
import { Post } from '../types/Post'
import ProfileHeader from '../components/ProfileHeader'
import { Animated } from 'react-native'

const dummyPosts: Post[] = [
	{
		id: '1',
		title: 'Dummy Title 1',
		content: 'This is my first dummy post.',
		author: 'username',
		createdAt: '2025-06-01',
	},
	{
		id: '2',
		title: 'Dummy Title 2',
		content: 'Second dummy post content here.',
		author: 'username',
		createdAt: '2025-06-01',
	},
	{
		id: '3',
		title: 'Dummy Title 3',
		content: 'Third dummy post content here.',
		author: 'username',
		createdAt: '2025-06-01',
	},
	{
		id: '4',
		title: 'Dummy Title 1',
		content: 'This is my first dummy post.',
		author: 'username',
		createdAt: '2025-06-01',
	},
	{
		id: '5',
		title: 'Dummy Title 2',
		content: 'Second dummy post content here.',
		author: 'username',
		createdAt: '2025-06-01',
	},
	{
		id: '6',
		title: 'Dummy Title 3',
		content: 'Third dummy post content here.',
		author: 'username',
		createdAt: '2025-06-01',
	},
]

const HomeScreen = () => {
	const [isFabOpen, setIsFabOpen] = useState(false)
	const animation1 = useRef(new Animated.Value(0)).current
	const animation2 = useRef(new Animated.Value(0)).current
	
	const toggleFabMenu = () => {
		const toValue = isFabOpen ? 0 : 1

		Animated.parallel([
			Animated.spring(animation1, {
				toValue,
				useNativeDriver: true,
			}),
			Animated.spring(animation2, {
				toValue,
				useNativeDriver: true,
			}),
		]).start()

		setIsFabOpen(!isFabOpen)
	}

	const fabStyle1 = {
		transform: [
			{
				translateY: animation1.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -70],
				}),
			},
		],
		opacity: animation1,
	}

	const fabStyle2 = {
		transform: [
			{
				translateY: animation2.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -140],
				}),
			},
		],
		opacity: animation2,
	}

	return (
		<View style={styles.container}>
			<ProfileHeader username='@username'/>

			<ScrollView
				contentContainerStyle={{ paddingTop: 135, paddingBottom: 100 }}>
				{dummyPosts.map((p) => (
					<PostCard key={p.id} post={p} />
				))}
			</ScrollView>

			<>
				<Animated.View style={[styles.fabOption, fabStyle2]}>
					<TouchableOpacity style={styles.fabButton}>
						<Ionicons name='image' size={20} color='#fff' />
					</TouchableOpacity>
				</Animated.View>

				<Animated.View style={[styles.fabOption, fabStyle1]}>
					<TouchableOpacity style={styles.fabButton}>
						<Ionicons name='pencil' size={20} color='#fff' />
					</TouchableOpacity>
				</Animated.View>

				<TouchableOpacity style={styles.fab} onPress={toggleFabMenu}>
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
		backgroundColor: '#5e66ff',
		padding: 16,
		borderRadius: 40,
		elevation: 6,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		zIndex: 10,
		marginBottom: 30,
		marginRight: 5,
	},
		fabOption: {
		position: 'absolute',
		right: 27,
		bottom: 45,
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
})


export default HomeScreen
