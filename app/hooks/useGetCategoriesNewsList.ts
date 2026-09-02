import {useEffect, useState} from "react";
import type {NewsStore} from "~/context/CategoriesStores/types";
import type {CategoriesUnions} from "~/components/Homepage/types";

export const useGetCategoriesNewsList = (store: () => NewsStore, category: CategoriesUnions)  => {
  const { newsList, newsFetch } = store()
  const [newsLimitNumber, setNewsLimitNumber] = useState(6)

  useEffect(() => {
    newsFetch(category, newsLimitNumber)
  }, [newsLimitNumber])

  return {newsList, setNewsLimitNumber};
}