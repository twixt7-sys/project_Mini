import { Comment } from "./Comment"

export type Post = {
	id: string
	title: string
	content: string
	author: string
	createdAt: string
	likes: number
	comments: Comment[]
	views: number
}