export interface ArticleDTO {
  id: string,
  headline: string,
  url: string,
  published_at: string,
  source: string,
  category: string,
  description: string,
  image_height: number,
  image_width: number,
  image_url: string,
}

export interface DataFetch {
  articles: ArticleDTO[]
}