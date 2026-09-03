import {BASE_URL} from "~/config/api";
import {
  type ArticleStructureDTO,
  createArticleStructureDTO,
  type DataFetch
} from "~/lib/api/types";
import type {CategoriesUnions} from "~/config/categoriesList";

export const getArticlesByCategory = async (category: CategoriesUnions, limit: number): Promise<ArticleStructureDTO[]> => {
  const response = await fetch(`${BASE_URL}/articles?category=${category}&limit=${limit}`, {method: "GET"})

  if(!response.ok) throw new Error("Failed to fetch data.")

  const fetchedData: DataFetch = await response.json()

  return fetchedData.articles.map((article) => {
    return createArticleStructureDTO(article)
  })
}