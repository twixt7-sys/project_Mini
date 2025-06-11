import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Animated, ScrollView } from 'react-native'
import { Audio } from 'expo-av'
import { Post } from '../types/Post'
import { Ionicons } from '@expo/vector-icons'
import Stat from './Stat'
import Txt from './Txt'
import dummyComments from '../dummy_data/dummy_comments'
import { TextInput } from 'react-native'

interface PostCardProps {
	post: Post
}

interface CommentSectionProps {
	isCollapsed: boolean
	setIsCollapsed: (value: boolean) => void
}

const CommentSection: React.FC<CommentSectionProps> = ({ isCollapsed, setIsCollapsed }) => {
	const collapseAnim = useRef(new Animated.Value(0)).current
	const scrollViewRef = useRef<ScrollView>(null)
	const [inputValue, setInputValue] = useState('')

	useEffect(() => {
		const toValue = isCollapsed ? 425 : 0
		Animated.timing(collapseAnim, {
			toValue,
			duration: 300,
			useNativeDriver: false
		}).start()
	}, [isCollapsed])

	return (
		<Animated.View style={{ height: collapseAnim, overflow: 'hidden' }}>
			<View style={styles.commentWrapper}>
				<View style={styles.commentSideBar}>
					<Txt />
				</View>
				<View style={styles.commentContent}>
					<View style={styles.commentBox}>
						<ScrollView
							ref={scrollViewRef}
							style={{ width: '100%', maxHeight: 350 }} // Bounded height
							contentContainerStyle={{ paddingBottom: 20 }}
							showsVerticalScrollIndicator={false}
							showsHorizontalScrollIndicator={false}
						>
							{dummyComments.map((comment, index) => (
								<View key={comment.id} style={styles.commentItem}>
									<Txt text={comment.author} style_={{ marginBottom: 5 }} />
									<Txt key={index} text={comment.content} />
								</View>
							))}
						</ScrollView>
					</View>
				</View>
			</View>

			<View style={styles.commentInputBox}>
				<View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
					<TextInput
						placeholder="Write a comment..."
						value={inputValue}
						onChangeText={setInputValue}
						style={[styles.inputField, { margin: 5, borderRadius: 10 }]}
						placeholderTextColor="#666"
					/>
					<TouchableHighlight
						style={{ marginRight: 10 }}
						onPress={() => {
							if (inputValue.trim()) {
								// Handle comment submission logic here
								setInputValue('')
							}
						}}
						underlayColor="#e0e0e0"
					/>
				</View>
				
			</View>
		</Animated.View>
	)
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	const [liked, setLiked] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)
	const scaleAnim = useRef(new Animated.Value(1)).current
	const sound = useRef<Audio.Sound | null>(null)

	useEffect(() => {
		const loadSound = async () => {
			const { sound: loadedSound } = await Audio.Sound.createAsync(
				require('../../assets/audio/pop.mp3')
			)
			sound.current = loadedSound
		}
		loadSound()

		return () => {
			sound.current?.unloadAsync()
		}
	}, [])

	const handleLikePress = async () => {
		setLiked(!liked)

		try {
			await sound.current?.replayAsync()
		} catch (error) {
			console.log('Sound play error:', error)
		}

		Animated.sequence([
			Animated.timing(scaleAnim, {
				toValue: 1.4,
				duration: 100,
				useNativeDriver: true,
			}),
			Animated.timing(scaleAnim, {
				toValue: 1,
				duration: 100,
				useNativeDriver: true,
			})
		]).start()
	}

	return (
		<View>
			<View style={styles.timestampContainer}>
				<Text style={styles.timestamp}>{post.createdAt}</Text>
			</View>

			<View style={styles.card}>
				<Txt text={post.author} style_={styles.author} />
				<Txt text={post.title} style_={styles.title} />
				<View style={styles.contentContainer}>
					<Txt text={post.content} style_={styles.content} />
				</View>

				<View style={styles.statsContainer}>
					<Stat iconName="heart" count={999} colors={{ c1: '#BD5D5D', c2: '#fff' }} />
					<Stat iconName="chatbubble-ellipses" count={999} colors={{ c1: '#42A545', c2: '#fff' }} />
					<Stat iconName="eye" count={999} colors={{ c1: '#5B6EBA', c2: '#fff' }} />
				</View>
			</View>

			<View style={styles.buttonsContainer}>
				<TouchableHighlight
					style={styles.iconButton}
					onPress={() => setIsCollapsed(prev => !prev)}
					underlayColor="#eaffea"
				>
					<Ionicons name={isCollapsed ? "chatbubble" : "chatbubble-outline"} size={20} color="#42A545" />
				</TouchableHighlight>

				<TouchableHighlight
					style={[styles.iconButton, styles.largeButton]}
					onPress={handleLikePress}
					underlayColor="#ffe5e5"
				>
					<Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
						<Ionicons
							name={liked ? 'heart' : 'heart-outline'}
							size={liked ? 35 : 28}
							color="#FF3B3B"
						/>
					</Animated.View>
				</TouchableHighlight>
			</View>

			<CommentSection isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#aab8ff',
		padding: 16,
		marginHorizontal: 6,
		marginBottom: -50,
		borderRadius: 20,
		elevation: 3,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
	},
	author: {
		fontSize: 14,
		fontWeight: '600',
		color: '#5e66ff',
		marginBottom: 4
	},
	title: {
		fontSize: 16,
		fontWeight: '700',
		color: '#2a2a2a',
		marginBottom: 10,
		marginLeft: 5
	},
	content: {
		fontSize: 15,
		color: '#444'
	},
	contentContainer: {
		backgroundColor: '#DAE2FF',
		borderRadius: 8,
		padding: 15
	},
	timestamp: {
		fontSize: 11,
		color: '#FFF',
		textAlign: 'center'
	},
	timestampContainer: {
		backgroundColor: '#889EF2',
		padding: 4,
		paddingHorizontal: 12,
		alignItems: 'center',
		alignSelf: 'flex-end',
		borderRadius: 18,
		transform: [{ translateX: -30 }, { translateY: 38 }],
		zIndex: 1
	},
	statsContainer: {
		marginTop: 10,
		alignSelf: 'flex-start',
		flexDirection: 'row',
		gap: 8,
		opacity: 0.8,
		transform: [{ scale: 0.9 }, { translateX: -10 }]
	},
	buttonsContainer: {
		alignSelf: 'flex-end',
		flexDirection: 'row',
		alignItems: 'center',
		transform: [{ translateX: -40 }, { translateY: 15 }]
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
		marginBottom: 10
	},
	largeButton: {
		borderColor: '#ED9A9A',
		width: 60,
		height: 60,
		marginLeft: 15
	},
	commentWrapper: {
		flex: 1,
		padding: 10,
		marginHorizontal: 6,
		flexDirection: 'row',
		gap: 5
	},
	commentSideBar: {
		backgroundColor: '#CFC',
		borderRadius: 5,
		alignSelf: 'flex-start',
		width: '2%',
		height: '100%',
		opacity: 0.5
	},
	commentContent: {
		flex: 1,
		gap: '2%'
	},
	commentBox: {
		borderWidth: 0,
		alignSelf: 'center',
		width: '90%',
		height: '100%',
		marginLeft: '2.5%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	commentInputBox: {
		backgroundColor: '#aab8ff',
		borderRadius: 20,
		alignSelf: 'center',
		width: '97.5%',
		height: 50,
		marginTop: 15
	},
	commentItem: {
		marginBottom: 10,
		backgroundColor: '#DfD3',
		borderRadius: 10,
		padding: 10,
		paddingVertical: 20
	},
	inputField: {
		backgroundColor: '#fff',
		flex: 1,
		height: '100%',
		paddingHorizontal: 15,
		color: '#000',
		fontSize: 15,
	},

})

export default PostCard
