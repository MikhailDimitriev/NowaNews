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

  interface useNewsStoreType {
    newsList: ArticleStructure[],
    firstNews: ArticleStructure | undefined,
    isLoading: boolean,
    errorMessage: string,

    newsFetch: () => void
  }

  interface useNewsCategoriesStoreType {
    categoryAi: ArticleStructure[],
    categoryBusiness: ArticleStructure[],
    categoryCulture: ArticleStructure[],
    categoryEntertainment: ArticleStructure[],
    categoryHealth: ArticleStructure[],

    categoryFetch: (category: string, limit: number) => void,
  }
}

export { ArticleStructure, DataFetch, Article, FirstArticle, NewsContextType, useNewsStoreType, useNewsCategoriesStoreType }