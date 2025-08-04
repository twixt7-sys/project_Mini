import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
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
    
    const handleLikePress = async () => {
        setIsLiked(!isLiked)
        comment.likes += isLiked ? -1 : 1
    }

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
                    <Ionicons name='heart-outline' size={20} color='#ffffff' style = {{ marginRight: 10 }} />
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