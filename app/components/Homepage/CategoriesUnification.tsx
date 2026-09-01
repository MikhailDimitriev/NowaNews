import NewsSectionByCategory from "~/components/Homepage/NewsSectionByCategory";
import React, { useEffect } from "react";
import {useNewsCategoriesStore} from "~/context/CategoriesStores/useNewsCategoriesStore";

const CategoriesUnification = () => {
  const { categoryAi, categoryBusiness, categoryCulture, categoryEntertainment, categoryHealth, categoryFetch } = useNewsCategoriesStore()

  // const { newsList: aiNewsList, newsFetch: aiNewsFetch } = useCategoryAiStore()
  // const { newsList: businessNewsList } = useCategoryBusinessStore()

  useEffect(() => {
    categoryFetch('ai', 2)
    categoryFetch('business', 2)
    categoryFetch('culture', 2)
    categoryFetch('entertainment', 2)
    categoryFetch('health', 2)
  }, []);

  return (
    <>
      <NewsSectionByCategory category={'ai'} articles={categoryAi} />
      <NewsSectionByCategory category={'business'} articles={categoryBusiness} />
      <NewsSectionByCategory category={'culture'} articles={categoryCulture} />
      <NewsSectionByCategory category={'entertainment'} articles={categoryEntertainment} />
      <NewsSectionByCategory category={'health'} articles={categoryHealth} />
    </>
  );
};

export default CategoriesUnification;