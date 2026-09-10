export interface Article {
  id: string,
  title: string,
  src: string,
  publishedAt: string,
  category: string,
  description: string,
  imageUrl: string,
}

export type Categories = 'ai' | 'business' | 'culture' | 'entertainment' | 'health'