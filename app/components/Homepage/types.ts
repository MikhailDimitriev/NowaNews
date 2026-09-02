export interface NewsCardProps {
  src: string,
  imageUrl: string,
  title: string,
  publishedAt: string,
  description?: string,
  category?: string,
}

export interface FirstNewsCardStructure extends NewsCardProps {
  description: string;
  category: string,
}

export interface SingleNewsCard extends NewsCardProps {
  description: string;
}

export type CategoriesUnions = 'ai' | 'business' | 'culture' | 'entertainment' | 'health'