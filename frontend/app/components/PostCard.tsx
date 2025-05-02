import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Post } from '../types/Post'

type PostCardProps = {
	post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	return (
		<View style={styles.card}>
			<Text style={styles.username}>{post.author}</Text>
			<Text style={styles.content}>{post.content}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		padding: 12,
		marginBottom: 12,
		borderRadius: 8,
		elevation: 2,
	},
	username: {
		fontWeight: 'bold',
		marginBottom: 4,
	},
	content: {
		fontSize: 16,
	},
})

export default PostCard
