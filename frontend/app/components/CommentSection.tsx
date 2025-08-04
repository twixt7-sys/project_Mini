import React, { useEffect, useRef, useState } from 'react'
import { View, TextInput, TouchableHighlight, FlatList, Animated, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import dummyComments from '../dummy_data/dummy_comments'
import Txt from '../components/Txt'
import AvatarIcon from './AvatarIcon'
import { Comment } from '../types/Comment'
import dummyUsers from '../dummy_data/dummy_users'
import CommentComponent from './CommentComponent'

interface CommentSectionProps {
    isCollapsed: boolean
    setIsCollapsed: (value: boolean) => void
}

const CommentSection: React.FC<CommentSectionProps> = ({ isCollapsed, setIsCollapsed }) => {
    const collapseAnim = useRef(new Animated.Value(0)).current
    const flatListRef = useRef<FlatList>(null)
    const [inputValue, setInputValue] = useState('')
    const [comments, setComments] = useState(dummyComments)

    useEffect(() => {
        const toValue = isCollapsed ? 400 : 0
        Animated.timing(collapseAnim, {
            toValue,
            duration: 300,
            useNativeDriver: false
        }).start()
    }, [isCollapsed])

    const handleAddComment = () => {
        if (inputValue.trim()) {
            const newComment = {
                id: (comments.length + 1).toString(),
                postId: '1',
                author: dummyUsers[0],
                content: inputValue.trim(),
                createdAt: new Date().toISOString(),
                likes: 0,
                replies: []
            }
            setComments(prev => [...prev, newComment])
            setInputValue('')
            setTimeout(() => {
                flatListRef.current?.scrollToEnd({ animated: true })
            }, 100)
        }
    }

    return (
        <Animated.View style={{ height: collapseAnim, overflow: 'hidden' }}>
            <View style={styles.commentWrapper}>
                <View style={styles.commentSideBar}>
                    <Txt />
                </View>
                <View style={styles.commentContent}>
                    <View style={styles.commentBox}>
                        <FlatList
                            ref={flatListRef}
                            data={comments}
                            keyExtractor={(item) => item.id}
                            style={{ width: '100%', maxHeight: 350 }}
                            contentContainerStyle={{ paddingBottom: 20 }}
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled={true}
                            renderItem={({ item }) => (
                                <CommentComponent comment={item}/>
                            )}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.commentInputBox}>
                <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                    <TextInput
                        placeholder="Write a comment..."
                        value={inputValue}
                        onChangeText={setInputValue}
                        style={[styles.inputField, { margin: 10, borderRadius: 25, marginVertical: 5, marginRight: 5 }]}
                        placeholderTextColor="#666"
                    />
                    <TouchableHighlight
                        style={{
                            marginRight: 5,
                            alignItems: 'center',
                            backgroundColor: '#44E',
                            borderRadius: 25,
                            width: 65,
                            transform: [{ scale: 0.8 }],
                        }}
                        onPress={handleAddComment}
                        underlayColor="#99F"
                    >
                        <Ionicons
                            name='send'
                            size={25}
                            color="#aab8ff"
                            style={{ margin: 10 }}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
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
	inputField: {
		backgroundColor: '#fff',
		flex: 1,
		paddingHorizontal: 15,
		color: '#000',
		fontSize: 15,
	},
})

export default CommentSection