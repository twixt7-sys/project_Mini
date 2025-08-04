import { Comment } from "../types/Comment"
import { SubComment } from "../types/Comment"
import dummyUsers from './dummy_users'

const dummyComments: Comment[] = [
    {
        id: '1',
        content: 'This is a comment on post 1.',
        author: dummyUsers[0],
        likes: 0,
        replies: [] as SubComment[],
        createdAt: '2025-06-01',
    },
    {
        id: '2',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: dummyUsers[1],
        likes: 0,
        replies: [] as SubComment[],
        createdAt: '2025-06-02',
    },
    {
        id: '3',
        content: 'This is a comment on post 3.',
        author: dummyUsers[0],
        likes: 0,
        replies: [] as SubComment[],
        createdAt: '2025-06-03',
    },
    {
        id: '4',
        content: 'This is a comment on post 4.',
        author: dummyUsers[1],
        likes: 0,
        replies: [] as SubComment[],
        createdAt: '2025-06-04',
    },
    {
        id: '5',
        content: 'This is a comment on post 5.',
        author: dummyUsers[0],
        likes: 0,
        replies: [] as SubComment[],
        createdAt: '2025-06-05',
    }
]

export default dummyComments