import React from 'react';
import Button from "~/components/Button";
import {useSearchedNewsStore} from "~/context/useSearchedNewsStore";
import SearchedNewsList from "~/components/SearchComponents/SearchedNewsList";
import {useGetSearchedNews} from "~/hooks/useGetSearchedNews";
import type {CategoriesUnions} from "~/config/categoriesList";

const SearchedNewsBody = ({ query, category }: {query: string | undefined, category?: CategoriesUnions}) => {

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
              type="button"
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