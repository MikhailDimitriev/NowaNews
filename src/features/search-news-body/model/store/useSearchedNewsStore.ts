import {create} from "zustand";
import type {Article, Categories} from "~/entities/article";
import {
  getSearchedArticles
} from "~/features/search-news-body/model/api/getSearchedArticles";

interface useNewsStoreStructure {
  newsList: Article[],
  newsCount: number,
  queryStore: string,
  isLoading: boolean,
  isNewNewsLoading: boolean,

  handleClick: (newsCountIncrement: number) => void,
  fetchRequiredNews: (query: string, limit: number, category?: Categories) => void
}

export const useSearchedNewsStore = create<useNewsStoreStructure>((set, get) => ({
  newsList: [],
  newsCount: 20,
  queryStore: '',
  isLoading: false,
  isNewNewsLoading: false,

  handleClick: (newsCountIncrement: number) => {
    set((state) => ({newsCount: state.newsCount + newsCountIncrement}));
    set({isNewNewsLoading: true});
  },

  fetchRequiredNews: async (query: string, limit: number, category?: Categories) => {
    let newsArray = get().newsList
    let queryStore = get().queryStore

    if(query !== queryStore) {
      set({queryStore: query})
      set({newsList: []})

      newsArray = get().newsList
      set({newsCount: 20})
    }

    if(newsArray.length === 0) {
      set({isLoading: true})
    }

    try {
      const fetchedDataDto = await getSearchedArticles(query, limit, category)
      set({newsList: fetchedDataDto})

    } catch (error) {
      console.log(error)

    } finally {
      if(newsArray.length === 0) {
        set({isLoading: false})
      }
      set({isNewNewsLoading: false})
    }
  }
}))