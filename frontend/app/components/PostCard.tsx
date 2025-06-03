import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Post } from '../types/Post'
import Svg, { Path, Mask, Defs, LinearGradient, Stop } from 'react-native-svg'

type PostCardProps = {
	post: Post
}

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
					<Text style={{ color: '#ffffff', fontWeight: 'bold' }}>H: 999</Text>
					<Text style={{ color: '#ffffff', fontWeight: 'bold' }}>C: 999</Text>
					<Text style={{ color: '#ffffff', fontWeight: 'bold' }}>V: 999</Text>
				</View>
			</View>
			<View style={styles.buttonsContainer}>
				<View style={styles.commentButtonContainer}>
				<View style={styles.commentButton}>
					<Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
						<Defs>
							<LinearGradient
								id="commentGradient"
								x1="7.5"
								y1="15"
								x2="7.5"
								y2="0"
								gradientUnits="userSpaceOnUse"
							>
								<Stop offset="0" stopColor="#19561B" />
								<Stop offset="1" stopColor="#42A545" />
							</LinearGradient>
						</Defs>
						<Path
							d="M0 6C0 2.68629 2.68629 0 6 0H9C12.3137 0 15 2.68629 15 6V9C15 12.3137 12.3137 15 9 15H1C0.447715 15 0 14.5523 0 14V6Z"
							stroke="url(#commentGradient)"
							strokeWidth={2}
						/>
					</Svg>
				</View>
				</View>
				<View style={styles.heartButtonContainer}>
				<View style={styles.heartButton}>
					<Svg width={28} height={24} viewBox="0 0 28 24" fill="none">
						<Defs>
							<LinearGradient
								id="heartGradient"
								x1="14"
								y1="24"
								x2="14"
								y2="0"
								gradientUnits="userSpaceOnUse"
							>
								<Stop offset="0" stopColor="#8B0000" />
								<Stop offset="1" stopColor="#FF3B3B" />
							</LinearGradient>
						</Defs>
						<Path
							d="M2.7 3.2C5.8 0.2 10.7 0.2 13.7 3.2C16.8 0.2 21.8 0.3 24.8 3.2C27.7 6.2 27.8 10.9 25 14L17.1 21.9C14.1 24.6 10.2 24.1 8.2 22L2.7 14.2C-0.3 11.2 -0.3 6.2 2.7 3.2Z"
							fill="url(#heartGradient)"
						/>
					</Svg>
				</View>
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
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		elevation: 3,
		paddingBottom: 5,
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
		marginBottom: 10,
		color: '#2a2a2a',
		marginLeft: 5
	},
	content: {
		fontSize: 15,
		color: '#444',
		marginBottom: 8,
	},
	contentContainer: {
		backgroundColor: '#FAFAFF',
		borderRadius: 15,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 10,
		paddingRight: 10
	},
	timestamp: {
		fontSize: 11,
		color: '#FFF',
		textAlign: 'center',
	},
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
	heartButton: {

	},
	heartButtonContainer: {
		backgroundColor: '#FFF',
		width: 60,
		height: 60,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		elevation: 3,
		marginLeft: 15
	},
	commentButton: {
		
	},
	commentButtonContainer: {
		backgroundColor: '#FFF',
		width: 40,
		height: 40,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		elevation: 3
	},
	buttonsContainer: {
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		transform: [
			{ translateX: -40 },
			{ translateY: 15 },
			{ scale: 1.0 }
		]
	},
	statsContainer: {
		backgroundColor: '#97c9f0',
		marginTop: 15,
		marginBottom: 15,
		padding: 5,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 20,
		alignSelf: 'flex-start',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		gap: 10,
	}
})

export default PostCard
