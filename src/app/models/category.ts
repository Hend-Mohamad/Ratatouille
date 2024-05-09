import { Recipe } from "./recipe"

export interface Category {
    id?: string
    name: string
    recipes: Recipe[]
}
