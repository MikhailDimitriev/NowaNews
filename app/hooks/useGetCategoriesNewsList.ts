import {useEffect, useState} from "react";
import type {NewsStore} from "~/context/CategoriesStores/types";
import type {CategoriesUnions} from "~/config/categoriesList";

const DEFAULT_NEWS_COUNT = 6

export const useGetCategoriesNewsList = (store: () => NewsStore, category: CategoriesUnions)  => {
  const { newsList, newsFetch, isNewNewsLoading } = store()
  const [newsCount, setNewsCount] = useState(DEFAULT_NEWS_COUNT);

  useEffect(() => {
    if(newsList.length < DEFAULT_NEWS_COUNT || newsCount !== DEFAULT_NEWS_COUNT ) {
      newsFetch(category, newsCount)
    }
  }, [newsCount])

  return {newsList, setNewsCount, isNewNewsLoading};
}