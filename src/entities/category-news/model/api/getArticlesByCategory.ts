import {BASE_URL} from "~/shared/constants/api";

import {
  type Article, type Categories, type DataFetch, mapArticleDTO,
} from "~/entities/article";

export const getArticlesByCategory = async (category: Categories, limit: number): Promise<Article[]> => {
  const response = await fetch(`${BASE_URL}/articles?category=${category}&limit=${limit}`, {method: "GET"})

  if(!response.ok) throw new Error("Failed to fetch data.")

  const fetchedData: DataFetch = await response.json()

  return fetchedData.articles.map((article) => {
    return mapArticleDTO(article)
  })
}