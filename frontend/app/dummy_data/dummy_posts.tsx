import { Post } from '../types/Post'
import dummyComments from './dummy_comments';
import { User } from '../types/User';
import dummyUsers from './dummy_users';

const dummyPosts: Post[] = [
    {
        id: '1',
        title: 'Dummy Title 1',
        content: 'This is my first dummy post.',
        author: dummyUsers[0] as User,
        createdAt: '2025-06-01',
        likes: 12,
        comments: dummyComments,
        views: 100,
    },
    {
        id: '2',
        title: 'Dummy Title 2',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: dummyUsers[0] as User,
        createdAt: '2025-06-01',
        likes: 145,
        comments: dummyComments,
        views: 1000,
    },
    {
        id: '3',
        title: 'Dummy Title 3',
        content: 'Third dummy post content here.',
        author: dummyUsers[0] as User,
        createdAt: '2025-06-01',
        likes: 0,
        comments: dummyComments,
        views: 0,
    },
    {
        id: '4',
        title: 'Dummy Title 1',
        content: 'This is my first dummy post.',
        author: dummyUsers[0] as User,
        createdAt: '2025-06-01',
        likes: 125342,
        comments: dummyComments,
        views: 999999,
    },
    {
        id: '5',
        title: 'Dummy Title 2',
        content: 'Second dummy post content here.',
        author: dummyUsers[0] as User,
        createdAt: '2025-06-01',
        likes: 1,
        comments: dummyComments,
        views: 1,
    },
    {
        id: '6',
        title: 'Dummy Title 3',
        content: 'Third dummy post content here.',
        author: dummyUsers[0] as User,
        createdAt: '2025-06-01',
        likes: 100,
        comments: dummyComments,
        views: 100,
    },
]

export default dummyPosts;