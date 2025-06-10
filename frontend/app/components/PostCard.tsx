import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Animated } from 'react-native'
import { Audio } from 'expo-av'
import { Post } from '../types/Post'
import { Ionicons } from '@expo/vector-icons'
import Stat from './Stat'
import Txt from './Txt'

type PostCardProps = { post: Post }

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	const [liked, setLiked] = useState(false)
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

		// Play pop sound
		try {
			await sound.current?.replayAsync()
		} catch (error) {
			console.log('Sound play error:', error)
		}

		// Animate heart
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
			{/* ...rest of the component stays the same... */}

			<View style={styles.buttonsContainer}>
				<TouchableHighlight style={styles.iconButton}>
					<Ionicons name="chatbubble-outline" size={20} color="#42A545" />
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
	contentContainer: { backgroundColor: '#DAE2FF', borderRadius: 8, padding: 15 },
	timestamp: { fontSize: 11, color: '#FFF', textAlign: 'center' },
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
		marginBottom: 10
	},
	largeButton: {
		borderColor: '#ED9A9A',
		width: 60,
		height: 60,
		marginLeft: 15
	}
})

export default PostCard