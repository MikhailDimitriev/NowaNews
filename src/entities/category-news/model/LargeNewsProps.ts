import type {Article} from "~/entities/article";

export interface LargeNewsProps extends Partial<Article> {
  src: string,
  imageUrl: string,
  title: string,
  description: string;
}