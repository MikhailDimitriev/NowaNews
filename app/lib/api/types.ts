export interface ArticleStructureDTO {
  id: string,
  title: string,
  src: string,
  publishedAt: string,
  category: string,
  description: string,
  imageUrl: string,
}

export interface DataFetch {
  articles: ArticleStructure[]
}

export interface ArticleStructure {
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

export function createArticleStructureDTO(fetchedData: ArticleStructure): ArticleStructureDTO {
  return {
    id: fetchedData.id,
    title: fetchedData.headline,
    src: fetchedData.url,
    publishedAt: new Date(fetchedData.published_at).toLocaleString(),
    category: fetchedData.category,
    description: fetchedData.description,
    imageUrl: fetchedData.image_url,
  }
}