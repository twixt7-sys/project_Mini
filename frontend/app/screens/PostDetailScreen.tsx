import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { Post } from '../types/post'

type PostDetailRoute = RouteProp<{ params: { post: Post } }, 'params'>

const PostDetailScreen = () => {
	const { params } = useRoute<PostDetailRoute>()
	const { post } = params

	return (
		<ScrollView contentContainerStyle={{ padding: 20 }}>
			<Text style={{ fontSize: 24, fontWeight: 'bold' }}>{post.title}</Text>
			<Text>{post.content}</Text>
			<Text>By: {post.author}</Text>
		</ScrollView>
	)
}

export default PostDetailScreen
