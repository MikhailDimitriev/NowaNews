import {create} from "zustand";
import type {Article} from "~/entities/article";
import {
  getAllCategoriesArticles
} from "~/entities/recent-news/model/api/getAllCategoriesArticles";

interface useNewsStoreStructure {
  newsList: Article[],
  firstNews: Article,
  isLoading: boolean,
  errorMessage: string,

  newsFetch: () => void
}

export const useNewsListStore = create<useNewsStoreStructure>((set) => ({
  newsList: [],
  firstNews: {
    id: "",
    title: "",
    src: "",
    publishedAt: "",
    category: "",
    description: "",
    imageUrl: ""
  },
  isLoading: false,
  errorMessage: '',

  newsFetch: async () => {
    set({isLoading: true, errorMessage: ''})
    try {
      const fetchedDataDTO = await getAllCategoriesArticles()
      const [first, ...rest] = fetchedDataDTO
      set({firstNews: first, newsList: rest})

    } catch (error) {
      set({errorMessage: "Something went wrong. Please try again later."})
    } finally {
      set({isLoading: false})
    }
  }
}))