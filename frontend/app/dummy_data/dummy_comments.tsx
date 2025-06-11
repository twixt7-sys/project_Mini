import { Comment } from "../types/Comment"

const dummyComments: Comment[] = [
    {
        id: '1',
        postId: '1',
        content: 'This is a comment on post 1.',
        author: 'user1',
        createdAt: '2025-06-01',
    },
    {
        id: '2',
        postId: '2',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: 'user2',
        createdAt: '2025-06-02',
    },
    {
        id: '3',
        postId: '3',
        content: 'This is a comment on post 3.',
        author: 'user3',
        createdAt: '2025-06-03',
    },
    {
        id: '4',
        postId: '4',
        content: 'This is a comment on post 4.',
        author: 'user4',
        createdAt: '2025-06-04',
    },
    {
        id: '5',
        postId: '5',
        content: 'This is a comment on post 5.',
        author: 'user5',
        createdAt: '2025-06-05',
    }
]

export default dummyComments