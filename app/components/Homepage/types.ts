export interface NewsCardProps {
  src: string,
  imageUrl: string,
  title: string,
  publishedAt?: string,
  description?: string,
  category?: string,
}

export interface FirstNewsCardProps extends NewsCardProps {
  description: string;
  category: string,
}

export interface HomepageNewsCardProps extends NewsCardProps {
  publishedAt: string,
}

export interface SingleNewsCard extends NewsCardProps {
  description: string;
}