import {BASE_URL} from "~/shared/constants/api"
import {type Article, type DataFetch, mapArticleDTO} from "~/entities/article";

export const getAllCategoriesArticles = async (): Promise<Article[]> => {
  const response = await fetch(`${BASE_URL}/articles?limit=5`, {method: "GET"})

  if(!response.ok) throw new Error("Failed to fetch data.")

  const fetchedData: DataFetch = await response.json()

  return fetchedData.articles.map((article) => {
    return mapArticleDTO(article)
  })
}