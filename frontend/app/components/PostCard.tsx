import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Post } from '../types/Post'

type PostCardProps = {
	post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	return (
		<View style={styles.card}>
			<Text style={styles.author}>{post.author}</Text>
			<Text style={styles.title}>{post.title}</Text>
			<Text style={styles.content}>{post.content}</Text>
			<Text style={styles.timestamp}>{post.createdAt}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#f9f9ff', // slightly tinted white
		padding: 16,
		marginHorizontal: 16,
		marginBottom: 12,
		borderRadius: 20,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		elevation: 3,
	},
	author: {
		fontSize: 14,
		fontWeight: '600',
		color: '#5e66ff',
		marginBottom: 4,
	},
	title: {
		fontSize: 16,
		fontWeight: '700',
		marginBottom: 4,
		color: '#2a2a2a',
	},
	content: {
		fontSize: 15,
		color: '#444',
		marginBottom: 8,
	},
	timestamp: {
		fontSize: 11,
		color: '#888',
		textAlign: 'right',
	},
})

export default PostCard
