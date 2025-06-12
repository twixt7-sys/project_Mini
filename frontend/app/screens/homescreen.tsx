import React, { useState, useRef } from 'react'
import {
	View,
	ScrollView,
	StyleSheet,
} from 'react-native'
import PostCard from '../components/PostCard'
import ProfileHeader from '../components/ProfileHeader'
import dummyPosts from '../dummy_data/dummy_posts'
import dummyUsers from '../dummy_data/dummy_users'
import FAB from '../components/FAB'



const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<ProfileHeader user={dummyUsers[0]} />

			<ScrollView contentContainerStyle={{ paddingTop: 40, paddingBottom: 100 }}>
				{dummyPosts.map((p) => (
					<PostCard key={p.id} post={p} />
				))}
			</ScrollView>

			<FAB/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#314a73',
		paddingHorizontal: 16,
	},
})

export default HomeScreen
