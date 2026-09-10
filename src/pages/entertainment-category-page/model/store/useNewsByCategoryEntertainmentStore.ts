import { create } from "zustand";
import type { NewsStore } from "~/entities/category-news";
import {getArticlesByCategory} from "~/entities/category-news";
import type {Categories} from "~/entities/article";

const newsIncrement = 6

export const useNewsByCategoryEntertainmentStore = create<NewsStore>((set, get) => ({
  newsList: [],
  isNewNewsLoading: false,
  newsCount: 6,

  newsFetch: async (category: Categories) => {
    const newsCount = get().newsCount;

    set({isNewNewsLoading: true});
    try {
      const fetchedData = await getArticlesByCategory(category, newsCount)
      set({newsList: fetchedData})

    } catch(error) {
      console.log(error)
    } finally {
      set({isNewNewsLoading: false})
    }
  },

  newsCountIncrement: (category: Categories) => {
    set((state) => ({newsCount: state.newsCount + newsIncrement}))

    const newsFetch = get().newsFetch;
    newsFetch(category)
  }
}))