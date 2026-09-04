import React from 'react';
import {useGetCategoriesNewsList} from "~/hooks/useGetCategoriesNewsList";
import CategoryPageBody
  from "~/components/CategoriesPages/CategoryPageBody";
import Button from "~/components/Button";
import type {NewsStore} from "~/context/CategoriesStores/types";
import type {CategoriesUnions} from "~/config/categoriesList";

const CategoryPage = ({store, category}: {store: () => NewsStore, category: CategoriesUnions}) => {
  const {newsList, setNewsCount, isNewNewsLoading} = useGetCategoriesNewsList(store, category);
  const newsCountIncrement = 6

  return (
    <div className="flex flex-col gap-8 items-center">
      <CategoryPageBody newsList={newsList} />

      {isNewNewsLoading && (
        <p className="text-3xl">Loading...</p>
      )}

      {!isNewNewsLoading && (
        <Button
          style={{
            width: "25%",
            fontSize: "1.25rem",
          }}
          type="button"
          onClick={() => {setNewsCount((prev) => prev + newsCountIncrement)}}
        >
          Load more
        </Button>
      )}
    </div>
  );
};

export default CategoryPage;