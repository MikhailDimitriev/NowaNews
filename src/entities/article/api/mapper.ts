import type {ArticleDTO} from "./dto";
import type {Article} from "~/entities/article";

export function mapArticleDTO(fetchedData: ArticleDTO): Article {
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