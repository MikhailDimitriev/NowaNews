import { create } from "zustand";
import type { NewsStore } from "./types";
import {getArticlesByCategory} from "~/lib/api/getArticlesByCategory";
import type {CategoriesUnions} from "~/config/categoriesList";

export const useNewsByCategoryEntertainmentStore = create<NewsStore>((set) => ({
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