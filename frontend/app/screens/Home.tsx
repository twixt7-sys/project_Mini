import React, { useRef, useState } from 'react'
import { View, StyleSheet, Animated, RefreshControl, FlatList } from 'react-native'
import PostCard from '../components/PostCard'
import ProfileHeader from '../components/ProfileHeader'
import dummyPosts from '../dummy_data/dummy_posts'
import dummyUsers from '../dummy_data/dummy_users'
import FAB from '../components/FAB'
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested'
])


const Home = () => {
	const scrollY = useRef(new Animated.Value(0)).current

	const [refreshing, setRefreshing] = useState(false)

	const onRefresh = () => {
	setRefreshing(true)

	setTimeout(() => {
		setRefreshing(false)
	}, 1500)
	}

	return (
		<View style={styles.container}>
			<ProfileHeader user={dummyUsers[0]} scrollY={scrollY} />

			<Animated.ScrollView
				contentContainerStyle={{ paddingTop: 110, paddingBottom: 100 }}
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#fff"
					progressViewOffset={100} />
				}
				scrollEventThrottle={16}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: true }
				)}
			>
				{dummyPosts.map((p) => (
					<PostCard key={p.id} post={p} />
				))}
			</Animated.ScrollView>

			<FAB />
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

export default Home
