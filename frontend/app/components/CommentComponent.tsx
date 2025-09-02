import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, Animated, TouchableHighlight } from 'react-native'
import { Audio } from 'expo-av'
import { Ionicons } from '@expo/vector-icons'
import Txt from './Txt'
import AvatarIcon from './AvatarIcon'
import { Comment } from '../types/Comment'

//temporary
import dummyComments from '../dummy_data/dummy_comments'

interface CommentProps{
    comment: Comment
}

const CommentComponent: React.FC<CommentProps> = ({ comment }) => {
    const [isLiked, setIsLiked] = useState(false)
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

    const handleLike = async () => {
        setIsLiked(!isCommentLiked)
        comment.likes += isLiked ? -1 : 1
        if (sound.current) {
            try {
                await sound.current?.replayAsync()
            } catch (error) {
                console.log('Sound play error:', error)
            }
        }
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

    return (
        <>
            <View style={styles.commentItem}>
                <View style={styles.header}>
                    <AvatarIcon uri={dummyComments[0].author.displayPicture?.uri as string} size={30} />
                    <Txt text={comment.author.username} style_={{ marginLeft: 10, marginBottom: 5, fontWeight: 'bold'}} />
                </View>
                <Txt text={comment.content} />
                <View style={styles.footer}>
                    <Ionicons name='chatbubble-outline' size={18} color='#ffffff' style = {{ marginRight: 10 }} />
                    <TouchableHighlight onPress={handleLike} underlayColor="transparent">
                        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                            <Ionicons name={isLiked ? 'heart' : 'heart-outline'} size={22} color='#ffffff' />
                        </Animated.View>
                    </TouchableHighlight>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    commentItem: {
		marginBottom: 10,
		backgroundColor: '#DfD3',
		borderRadius: 10,
		padding: 10,
		paddingVertical: 10,
        paddingBottom: 15
	},
    header: {
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center'
    },
    footer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        alignSelf: 'flex-end'
    }
})

export default CommentComponent