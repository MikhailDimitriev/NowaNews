import type { ArticleStructureDTO } from "~/lib/api/types";
import type {CategoriesUnions} from "~/config/categoriesList";

export interface NewsStore {
  newsList: ArticleStructureDTO[],

  newsFetch: (category: CategoriesUnions, limit: number) => void
}