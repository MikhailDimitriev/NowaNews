import {
  type ArticleStructureDTO,
  createArticleStructureDTO,
  type DataFetch
} from "~/lib/api/types";
import {BASE_URL} from "~/config/api";
import type {CategoriesUnions} from "~/config/categoriesList";

export const getSearchedArticles = async (query: string, limit: number, category?: CategoriesUnions): Promise<ArticleStructureDTO[]> => {
  const response = await fetch(`${BASE_URL}/search?q=${query}&limit=${limit}${category ? `&category=${category}` : ``}`, {method: "GET"})

  if(!response.ok) throw new Error("Failed to fetch data.")

  const fetchedData: DataFetch = await response.json()

  return fetchedData.articles.map((article) => {
    return createArticleStructureDTO(article)
  })
}