import { Post } from '../types/Post'

const API_URL = 'https://your.api/posts' // replace this with your actual endpoint

// Get all posts for the authenticated user
export const getPosts = async (token: string): Promise<Post[]> => {
	try {
		const response = await fetch(API_URL, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		})

		if (!response.ok) {
			throw new Error(`Failed to fetch posts: ${response.statusText}`)
		}

		const data = await response.json()
		return data as Post[]
	} catch (error) {
		console.error('getPosts error:', error)
		throw error
	}
}
