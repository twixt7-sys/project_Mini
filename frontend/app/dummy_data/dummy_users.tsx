import { User } from '../types/User'
import { dummyNotifications } from './dummy_notifications'
import { dummyImage, dummyCover } from './dummy_image'
import { dummyPosts } from './dummy_posts'

const dummyUsers: User[] = [
    {
        id: 1,
        username: 'testtuser',
        email: 'test@test.test',
        displayPicture: dummyImage,
        coverPicture: dummyCover,
        notifications: [],
        followers: [],
        following: [],
        posts: dummyPosts,
        joinDate: '2022-01-01',
    },
    {
        id: 2,
        username: 'testtuser2',
        email: 'test2@test.test',
        displayPicture: dummyImage,
        coverPicture: dummyCover,
        notifications: dummyNotifications,
        followers: [],
        following: [],
        posts: dummyPosts,
        joinDate: '2022-01-01',
    }

]

export default dummyUsers