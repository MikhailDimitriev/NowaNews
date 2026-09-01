import {create} from "zustand";
import {
  type ArticleStructureDTO,
} from "~/lib/api/types";
import {getArticlesByCategory} from "~/lib/api/getArticlesByCategory";
import type {CategoriesUnions} from "~/components/Homepage/types";

interface useNewsCategoriesStoreStructure {
  categoryAi: ArticleStructureDTO[],
  categoryBusiness: ArticleStructureDTO[],
  categoryCulture: ArticleStructureDTO[],
  categoryEntertainment: ArticleStructureDTO[],
  categoryHealth: ArticleStructureDTO[],

  categoryFetch: (category: CategoriesUnions, limit: number) => void,
}

export const useNewsCategoriesStore = create<useNewsCategoriesStoreStructure>((set) => ({
  categoryAi: [],
  categoryBusiness: [],
  categoryCulture: [],
  categoryEntertainment: [],
  categoryHealth: [],

  categoryFetch: async (category: CategoriesUnions, limit: number) => {
    try {
      const fetchedDataToDTO = await getArticlesByCategory(category, limit)

      switch (category) {
        case "ai":
          return set({categoryAi: fetchedDataToDTO})
        case "business":
          return set({categoryBusiness: fetchedDataToDTO})
        case "culture":
          return set({categoryCulture: fetchedDataToDTO})
        case "entertainment":
          return set({categoryEntertainment: fetchedDataToDTO})
        case "health":
          return set({categoryHealth: fetchedDataToDTO})
      }

    } catch(error) {
      console.log(error)
    }
  },
}))