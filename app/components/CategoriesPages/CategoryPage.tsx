import React from 'react';
import {useGetCategoriesNewsList} from "~/hooks/useGetCategoriesNewsList";
import CategoryPageBody
  from "~/components/CategoriesPages/CategoryPageBody";
import Button from "~/components/Button";
import type {NewsStore} from "~/context/CategoriesStores/types";
import type {CategoriesUnions} from "~/config/categoriesList";

const CategoryPage = ({store, category}: {store: () => NewsStore, category: CategoriesUnions}) => {
  const {newsList, setNewsLimitNumber} = useGetCategoriesNewsList(store, category);

  return (
    <div className="flex flex-col gap-8 items-center">
      <CategoryPageBody newsList={newsList} />

      <Button
        style={{
          width: "25%",
          fontSize: "1.25rem",
        }}
        type="button"
        onClick={() => setNewsLimitNumber((prev) => prev + 6)}
      >
        Load more
      </Button>
    </div>
  );
};

export default CategoryPage;