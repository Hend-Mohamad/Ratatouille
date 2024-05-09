export interface User {
    id: string
    name: string
    email: string
    password: string
    profileImage?: string
    followers?: string[] //IDs of users who follow this user
    following?: string[] //IDs of users whom this user follows
    savedRecipes?: string[]
}
