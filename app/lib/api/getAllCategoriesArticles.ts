import {
  type ArticleStructureDTO,
  createArticleStructureDTO,
  type DataFetch
} from "~/lib/api/types";
import {BASE_URL} from "~/config/api";

export const getAllCategoriesArticles = async (): Promise<ArticleStructureDTO[]> => {
  const response = await fetch(`${BASE_URL}/articles?limit=5`, {method: "GET"})

  if(!response.ok) throw new Error("Failed to fetch data.")

  const fetchedData: DataFetch = await response.json()

  return fetchedData.articles.map((article) => {
    return createArticleStructureDTO(article)
  })
}