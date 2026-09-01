export interface NewsCardProps {
  src: string,
  imageUrl: string,
  title: string,
  publishedAt: string,
  description?: string,
  category?: string,
}

export type CategoriesUnions = 'ai' | 'business' | 'culture' | 'entertainment' | 'health'