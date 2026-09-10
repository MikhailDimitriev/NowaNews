import React from "react";
import {NewsCategorySection} from "~/widgets/categories-sections";
import {
  useUnifiedCategories
} from "~/widgets/categories-sections/model/hooks/useUnifiedCategories";

const CategoriesSectionsList = () => {

  const allCategoriesNewsList = useUnifiedCategories()
  
  return (
    <>
      {allCategoriesNewsList.map((news) => (
        <NewsCategorySection key={news.category} category={news.category} articles={news.newsList.slice(0, 2)} />
      ))}
    </>
  );
};

export default CategoriesSectionsList;