import React, { useState } from 'react'
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

const dummyPosts: Post[] = [
	{
		id: '1',
		title: 'Dummy Title 1',
		content: 'First dummy post content here.',
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
]

const HomeScreen = () => {
	const [refreshing, setRefreshing] = useState(false)

	const onRefresh = async () => {
		setRefreshing(true)
		// simulate fetch delay
		setTimeout(() => {
			setRefreshing(false)
		}, 1000)
	}

	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={{ paddingBottom: 100 }}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}>
				<ProfileHeader />

				{dummyPosts.map((post) => (
					<PostCard key={post.id} post={post}/>
				))}

			</ScrollView>

			<TouchableOpacity style={styles.fab}>
				<Ionicons name='camera' size={28} color='#fff' />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#dae6f4', // soft pastel background
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
	},

})

export default HomeScreen
