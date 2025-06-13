export type SubComment = {
    id: string,
    content: string,
    author: string,
    likes: number,
    createdAt: string,
}

export type Comment = {
    id: string,
    content: string,
    author: string,
    likes: number,
    replies: SubComment[],
    createdAt: string,
}

export default []