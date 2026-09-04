import NewsCategorySection from "~/components/Homepage/NewsCategorySection";
import React from "react";
import {useUnifiedCategories} from "~/context/useUnifiedCategories";



const CategoriesSections = () => {

  const allCategoriesNewsList = useUnifiedCategories(6)
  
  return (
    <>
      {allCategoriesNewsList.map((news) => (
        <NewsCategorySection key={news.category} category={news.category} articles={news.newsList.slice(0, 2)} />
      ))}
    </>
  );
};

export default CategoriesSections;