import React from 'react';
import Button from "~/shared/ui/Button";
import {SearchedNewsList} from "~/entities/searched-news";
import type {Categories} from "~/entities/article";
import {
  useGetSearchedNews
} from "~/features/search-news-body/model/hooks/useGetSearchedNews";
import {
  useSearchedNewsStore
} from "~/features/search-news-body/model/store/useSearchedNewsStore";

const SearchedNewsBody = ({ query, category }: {query: string | undefined, category?: Categories}) => {

  const { handleClick, newsList, isLoading, isNewNewsLoading } = useSearchedNewsStore()
  const newsCountIncrement = 20

  useGetSearchedNews(query, category)

  return (
    <div className="flex flex-col gap-4 w-full shadow-2xl bg-white rounded-xl dark-mode-bg-alt absolute top-full max-h-100 overflow-auto scrollbar-none opacity-90 z-1000 p-4">
      {newsList.length === 0 && (
        isLoading && <div className="self-center">Loading...</div>
      )}

      {!isLoading && newsList.length === 0 && (
        <div className="self-center">Nothing found</div>
      )}

      {!isLoading && newsList.length > 0 && (
        <div className="flex flex-col">
          <SearchedNewsList newsList={newsList} />

          {isNewNewsLoading && (
            <p className="text-center p-2">Loading...</p>
          )}

          { (newsList.length % newsCountIncrement === 0 && !isNewNewsLoading) &&
            <Button
              onClick={() => handleClick(newsCountIncrement)}
            >
              Load more
            </Button>
          }
        </div>
      )}
    </div>
  )
}



export default SearchedNewsBody;