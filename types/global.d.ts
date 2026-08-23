declare global {

  interface ArticleStructure {
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

  interface DataFetch {
    articles: ArticleStructure[]
  }

  interface Article {
    article: ArticleStructure
  }

  interface FirstArticle {
    article: ArticleStructure | undefined
  }

  interface NewsContextType {
    timeConverter: (article: ArticleStructure) => string
  }
}

export { ArticleStructure, DataFetch, Article, FirstArticle, NewsContextType }