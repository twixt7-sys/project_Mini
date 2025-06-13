import { Comment } from "./Comment"
import { User } from "./User"
import { Image } from "./Image"

export type Post = {
  id: string
  title: string
  content: string
  author: User
  likes: number
  comments: Comment[]
  views: number
  images?: Image[]
  createdAt: string
}


export default [] as Post[]