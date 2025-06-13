import { Post } from "./Post"
import { Image } from "./Image"
import { Notification } from "./Notification"

export type User = {
    id: number,
    username: string,
    email: string,
    displayPicture?: Image,
    coverPicture?: Image,
    notifications: Notification[],
    posts: Post[],
    followers: User[],
    following: User[],
    joinDate: Date | string,
}