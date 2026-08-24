import {create} from "zustand";
import { BASE_URL } from "~/config/api";
import type { useNewsCategoriesStoreType } from "../../types/global";


export const useNewsCategoriesStore = create<useNewsCategoriesStoreType>((set) => ({
  categoryAi: [],
  categoryBusiness: [],
  categoryCulture: [],
  categoryEntertainment: [],
  categoryHealth: [],

  categoryFetch: async (category: string, limit: number) => {
    try {
      const response = await fetch(`${BASE_URL}/articles?category=${category}&limit=${limit}`, {method: "GET"})

      if(!response.ok) {
        throw new Error("Failed to fetch data.")
      }

      const fetchedData: DataFetch = await response.json()

      switch (category) {
        case "ai":
          return set({categoryAi: fetchedData.articles})
        case "business":
          return set({categoryBusiness: fetchedData.articles})
        case "culture":
          return set({categoryCulture: fetchedData.articles})
        case "entertainment":
          return set({categoryEntertainment: fetchedData.articles})
        case "health":
          return set({categoryHealth: fetchedData.articles})
      }

    } catch(error) {
      console.log(error)
    }
  },
}))