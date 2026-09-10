import {
  type Article,
  type Categories,
  type DataFetch,
  mapArticleDTO
} from "~/entities/article";
import {BASE_URL} from "~/shared/constants/api";

export const getSearchedArticles = async (query: string, limit: number, category?: Categories): Promise<Article[]> => {
  const response = await fetch(`${BASE_URL}/search?q=${query}&limit=${limit}${category ? `&category=${category}` : ``}`, {method: "GET"})

  if(!response.ok) throw new Error("Failed to fetch data.")

  const fetchedData: DataFetch = await response.json()

  return fetchedData.articles.map((article) => {
    return mapArticleDTO(article)
  })
}