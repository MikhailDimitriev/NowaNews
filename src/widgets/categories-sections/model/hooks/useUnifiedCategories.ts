import {useEffect} from "react";
import {
  NEWS_CATEGORIES_AND_STORES_LIST
} from "~/widgets/categories-sections/model/constants/newsCategoriesWithStoresList";

export const useUnifiedCategories = () => {

  const allCategoriesNewsList = NEWS_CATEGORIES_AND_STORES_LIST
    .map((categoryItem) => {
      return {category: categoryItem.category, newsList: categoryItem.storeName(state => state.newsList)}
    })

  const allCategoriesFetchFunctions = NEWS_CATEGORIES_AND_STORES_LIST
    .map((categoryItem) => {
      return {category: categoryItem.category, newsFetch: categoryItem.storeName(state => state.newsFetch)}
    })

  const useAllCategoriesFetch = ()=> {
    allCategoriesFetchFunctions.forEach((categoryItem) => {
      categoryItem.newsFetch(categoryItem.category)
    })
  }

  useEffect(() => {
    useAllCategoriesFetch()
  }, []);

  return allCategoriesNewsList
}