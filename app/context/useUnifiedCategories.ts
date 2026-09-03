import {NEWS_CATEGORIES_AND_STORES_LIST} from "~/config/categoriesList";
import {useEffect} from "react";

export const useUnifiedCategories = (limit: number) => {

  const allCategoriesNewsList = NEWS_CATEGORIES_AND_STORES_LIST
    .map((categoryItem) => {
      return {category: categoryItem.category, newsList: categoryItem.storeName(state => state.newsList)}
    })

  const allCategoriesFetchFunctions = NEWS_CATEGORIES_AND_STORES_LIST
    .map((categoryItem) => {
      return {category: categoryItem.category, newsFetch: categoryItem.storeName(state => state.newsFetch)}
    })

  const useAllCategoriesFetch = (limit: number)=> {
    allCategoriesFetchFunctions.forEach((categoryItem) => {
      categoryItem.newsFetch(categoryItem.category, limit)
    })
  }

  useEffect(() => {
    useAllCategoriesFetch(limit)
  }, []);

  return allCategoriesNewsList
}