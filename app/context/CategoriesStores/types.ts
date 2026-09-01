import type { ArticleStructureDTO } from "~/lib/api/types";
import type {CategoriesUnions} from "~/components/Homepage/types";

export interface NewsStore {
  newsList: ArticleStructureDTO[],

  newsFetch: (category: CategoriesUnions, limit: number) => void
}