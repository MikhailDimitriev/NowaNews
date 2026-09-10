import { useEffect } from "react";
import type { NewsStore } from "~/entities/category-news";
import type {Categories} from "~/entities/article";

const DEFAULT_NEWS_COUNT = 6

export const useGetCategoriesNewsList = (store: () => NewsStore, category: Categories)  => {
  const { newsFetch, newsList, isNewNewsLoading, newsCountIncrement } = store()

  useEffect(() => {
    if(newsList.length < DEFAULT_NEWS_COUNT) {
      newsFetch(category)
    }
  }, [])

  return {newsList, isNewNewsLoading, newsCountIncrement};
}