import type {Article} from "~/entities/article";

export interface NewsCardProps extends Partial<Article> {
  src: string,
  imageUrl: string,
  title: string,
  publishedAt: string,
  description?: string,
}