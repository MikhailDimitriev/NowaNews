import {create} from "zustand";
import { BASE_URL } from "~/config/api";
import type { useNewsStoreType } from "../../types/global";


export const useNewsStore = create<useNewsStoreType>((set) => ({
  newsList: [],
  firstNews: undefined,
  isLoading: false,
  errorMessage: '',

  newsFetch: async () => {
    set({isLoading: true, errorMessage: ''})
    try {
      const response = await fetch(`${BASE_URL}/articles?limit=5`, {method: "GET"})

      if (!response.ok) throw new Error("Failed to fetch data.")

      const fetchedArticles: DataFetch = await response.json()

      if (fetchedArticles.articles.length > 0) {
        const [first, ...rest] = fetchedArticles.articles
        set({firstNews: first, newsList: rest})
      } else {
        set({newsList: []})
      }
    } catch (error) {
      set({errorMessage: "Something went wrong. Please try again later."})
    } finally {
      set({isLoading: false})
    }
  }
}))