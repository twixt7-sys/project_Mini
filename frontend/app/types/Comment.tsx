import { User } from './User'

export type SubComment = {
    id: string,
    content: string,
    author: User,
    likes: number,
    createdAt: string,
}

export type Comment = {
    id: string,
    content: string,
    author: User,
    likes: number,
    replies: SubComment[],
    createdAt: string,
}

export default []