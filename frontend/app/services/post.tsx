import axios from 'axios'
import { Post } from '../types/Post'

const API_URL = 'https://project-mini-4ed3.onrender.com'

export const getPosts = async (token: string): Promise<Post[]> => {
	const response = await axios.get<Post[]>(API_URL, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	return response.data
}
