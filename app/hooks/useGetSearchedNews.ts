import {useSearchedNewsStore} from "~/context/useSearchedNewsStore";
import {useEffect} from "react";
import type {CategoriesUnions} from "~/config/categoriesList";

export const useGetSearchedNews = (query: string | undefined, category?: CategoriesUnions) => {
  const { fetchRequiredNews, newsCount } = useSearchedNewsStore()

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        fetchRequiredNews(query, newsCount, category)
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [query, newsCount]);

}