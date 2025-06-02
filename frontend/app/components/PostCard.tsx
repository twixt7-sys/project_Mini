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
			<View style={styles.timestampContainer}>
				<Text style={styles.timestamp}>{post.createdAt}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#f9f9ff',
		padding: 16,
		marginHorizontal: 16,
		marginBottom: 30,
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
		textAlign: 'center',
	},
	timestampContainer: {
		backgroundColor: '#333',
		padding: 8,
		borderTopWidth: 1,
		borderTopColor: '#e0e0e0',
		alignItems: 'center',
		borderRadius: 18,
		width: 100,
		yOffset: 10
	}
})

export default PostCard
