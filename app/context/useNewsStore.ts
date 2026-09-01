import {create} from "zustand";
import {
  type ArticleStructureDTO,
} from "~/lib/api/types";
import {getAllCategoriesArticles} from "~/lib/api/getAllCategoriesArticles";

interface useNewsStoreStructure {
  newsList: ArticleStructureDTO[],
  firstNews: ArticleStructureDTO,
  isLoading: boolean,
  errorMessage: string,

  newsFetch: () => void
}

export const useNewsStore = create<useNewsStoreStructure>((set) => ({
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