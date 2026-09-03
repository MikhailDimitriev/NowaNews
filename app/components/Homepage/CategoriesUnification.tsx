import NewsSectionByCategory from "~/components/Homepage/NewsSectionByCategory";
import React from "react";
import {useUnifiedCategories} from "~/context/useUnifiedCategories";



const CategoriesUnification = () => {

  const allCategoriesNewsList = useUnifiedCategories(2)
  
  return (
    <>
      {allCategoriesNewsList.map((news) => (
        <NewsSectionByCategory key={news.category} category={news.category} articles={news.newsList} />
      ))}
    </>
  );
};

export default CategoriesUnification;