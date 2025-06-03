import axios from 'axios'

import { Post } from '../app/types/Post'
import { BASE_URL } from './config'

const API_URL = BASE_URL + '/posts'

export const getPosts = async (token: string): Promise<Post[]> => {
	const response = await axios.get<Post[]>(API_URL, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	return response.data
}