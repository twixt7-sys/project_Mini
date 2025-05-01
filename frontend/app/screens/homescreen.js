import React, {useEffect, useState, useContext} from 'react'
import {View, ScrollView, RefreshControl} from 'react-native'
import {AuthContext} from '../contexts/AuthContext'
import {getPosts} from '../services/post'
import PostCard from '../components/PostCard'

const HomeScreen = () => {
    const { userToken } = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const fetchPosts = async () => {
        try {
            const data = await getPosts(userToken)
            setPosts(data)
        } catch (err) {
            console.log('error fetching posts:', err)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const onRefresh = async () => {
        setRefreshing(true)
        await fetchPosts()
        setRefreshing(false)
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </ScrollView>
    )
}

export default HomeScreen