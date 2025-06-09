import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Post } from '../types/Post'
import { Ionicons } from '@expo/vector-icons'
import Stat from './Stat'

type PostCardProps = { post: Post }

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	return (
		<View>
			<View style={styles.timestampContainer}>
				<Text style={styles.timestamp}>{post.createdAt}</Text>
			</View>

			<View style={styles.card}>
				<Text style={styles.author}>{post.author}</Text>
				<Text style={styles.title}>{post.title}</Text>
				<View style={styles.contentContainer}>
					<Text style={styles.content}>{post.content}</Text>
				</View>

				<View style={styles.statsContainer}>
					<Stat iconName="heart" count={999}
					colors={{c1: '#BD5D5D', c2: '#fff'}}/>
					<Stat iconName="chatbubble-ellipses" count={999}
					colors={{c1: '#42A545', c2: '#fff'}}/>
					<Stat iconName="eye" count={999}
					colors={{c1: '#5B6EBA', c2: '#fff'}}/>
				</View>
			</View>

			<View style={styles.buttonsContainer}>
				<View style={styles.iconButton}>
					<Ionicons name="chatbubble-outline" size={20} color="#42A545" />
				</View>

				<View style={[styles.iconButton, styles.largeButton]}>
					<Ionicons name="heart-outline" size={28} color="#FF3B3B" />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#aab8ff',
		padding: 16,
		marginHorizontal: 16,
		marginBottom: -50,
		borderRadius: 20,
		elevation: 3,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
	},
	author: { fontSize: 14, fontWeight: '600', color: '#5e66ff', marginBottom: 4 },
	title: { fontSize: 16, fontWeight: '700', color: '#2a2a2a', marginBottom: 10, marginLeft: 5 },
	content: { fontSize: 15, color: '#444', },
	contentContainer: { backgroundColor: '#DAE2FF', borderRadius: 15, padding: 15 },
	timestamp: { fontSize: 11, color: '#FFF', textAlign: 'center' },
	timestampContainer: {
		backgroundColor: '#97c9f0',
		padding: 8,
		borderTopWidth: 1,
		borderTopColor: '#e0e0e0',
		alignItems: 'center',
		alignSelf: 'flex-end',
		borderRadius: 18,
		width: 100,
		transform: [{ translateX: -28 }, { translateY: 40 }],
		zIndex: 1
	},
	statsContainer: {
		marginTop: 10,
		flexDirection: 'row',
		gap: 8,
	},
	buttonsContainer: {
		alignSelf: 'flex-end',
		flexDirection: 'row',
		alignItems: 'center',
		transform: [{ translateX: -40 }, { translateY: 15 }],
	},
	iconButton: {
		backgroundColor: '#FFF',
		borderWidth: 2,
		borderColor: '#77DD7A',
		width: 40,
		height: 40,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 3,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
	},
	largeButton: {
		borderColor: '#ED9A9A',
		width: 60,
		height: 60,
		marginLeft: 15
	}
})

export default PostCard
