import React from 'react';
import Button from "~/shared/ui/Button";
import type {NewsStore} from "~/entities/category-news";
import {CategoryPageList} from "~/entities/category-news";
import type {Categories} from "~/entities/article";
import {
  useGetCategoriesNewsList
} from "~/widgets/category-page-body/model/hooks/useGetCategoriesNewsList";

const CategoryPageBody = ({store, category}: {store: () => NewsStore, category: Categories}) => {
  const { newsList, isNewNewsLoading, newsCountIncrement } = useGetCategoriesNewsList(store, category);

  return (
    <div className="flex flex-col gap-8 items-center">
      <CategoryPageList newsList={newsList} />

      {isNewNewsLoading && (
        <p className="text-3xl">Loading...</p>
      )}

      {!isNewNewsLoading && (
        <Button
          style={{
            width: "40%",
            fontSize: "1.25rem",
          }}
          onClick={() => newsCountIncrement(category)}
        >
          Load more
        </Button>
      )}
    </div>
  );
};

export default CategoryPageBody;