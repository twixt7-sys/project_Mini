import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Post } from '../types/Post'
import { Ionicons } from '@expo/vector-icons'

type PostCardProps = { post: Post }

const Stat = ({ iconName, color, count }: { iconName: keyof typeof Ionicons.glyphMap; color: string; count: number }) => (
	<View style={[styles.stat, { backgroundColor: color }]}>
		<View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
			<Ionicons name={iconName} size={14} color="#000" />
			<Text style={styles.statText}>{count}</Text>
		</View>
	</View>
)

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
					<Stat iconName="heart" color="#FFB7CE" count={999} />
					<Stat iconName="chatbubble-ellipses" color="#B7FFD8" count={999} />
					<Stat iconName="eye" color="#B7D8FF" count={999} />
				</View>
			</View>

			<View style={styles.buttonsContainer}>
				<View style={styles.iconButton}>
					<Ionicons name="chatbubble" size={20} color="#42A545" />
				</View>

				<View style={[styles.iconButton, styles.largeButton]}>
					<Ionicons name="heart" size={28} color="#FF3B3B" />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#e5f5ff',
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
	content: { fontSize: 15, color: '#444' },
	contentContainer: { backgroundColor: '#FAFAFF', borderRadius: 15, padding: 15 },
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
	stat: {
		borderRadius: 25,
		paddingHorizontal: 10,
		paddingVertical: 4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	statText: {
		color: '#000',
		fontWeight: 'bold',
		fontSize: 12
	},
	buttonsContainer: {
		alignSelf: 'flex-end',
		flexDirection: 'row',
		alignItems: 'center',
		transform: [{ translateX: -40 }, { translateY: 15 }],
	},
	iconButton: {
		backgroundColor: '#FFF',
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
		width: 60,
		height: 60,
		marginLeft: 15
	}
})

export default PostCard
