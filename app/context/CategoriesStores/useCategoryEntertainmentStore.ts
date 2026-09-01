import { create } from "zustand";
import type { NewsStore } from "./types";
import {getArticlesByCategory} from "~/lib/api/getArticlesByCategory";
import type {CategoriesUnions} from "~/components/Homepage/types";

export const useCategoryEntertainmentStore = create<NewsStore>((set) => ({
  newsList: [],

  newsFetch: async (category: CategoriesUnions, limit: number) => {
    try {
      const fetchedData = await getArticlesByCategory(category, limit)

      set({newsList: fetchedData})

    } catch(error) {
      console.log(error)
    }
  },
}))