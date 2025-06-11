export type Comment = {
    id: string,
    postId: string, // foreign key
    content: string,
    author: string,
    createdAt: string,
}