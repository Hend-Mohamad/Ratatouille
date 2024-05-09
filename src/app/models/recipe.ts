import { Ingredient } from "./ingredient"
import { NutritionFacts } from "./nutrition-facts-map"

export interface Recipe {
  id?: string
  title: string
  description: string
  category: string
  cuisine: string
  servings?: number | null
  imageUrl?: string
  time: string
  ingredient?: Ingredient[]
  authorId: string
  steps?: string[]
  nutrition?: NutritionFacts
  likes?: string[] //(IDs of users who liked the recipe)
  comments?: Comment[] //(array of comments)
  averageRating?: number; // Average rating attribute
}