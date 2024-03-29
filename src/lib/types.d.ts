export interface Post {
    _id?: string
    title: string
    subtitle: string
    content: string
    tags: string[]
    sources: string[]
    imageURL: string
    userId: string | null | undefined
    author: string | null | undefined
    createdAt: Date
}