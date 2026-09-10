import {useEffect} from "react";
import type {Categories} from "~/entities/article";
import {
  useSearchedNewsStore
} from "~/features/search-news-body/model/store/useSearchedNewsStore";

export const useGetSearchedNews = (query: string | undefined, category?: Categories) => {
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