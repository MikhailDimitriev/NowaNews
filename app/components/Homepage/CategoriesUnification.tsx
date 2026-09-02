import NewsSectionByCategory from "~/components/Homepage/NewsSectionByCategory";
import React, { useEffect } from "react";
import {useNewsAllCategoriesStore} from "~/context/useNewsAllCategoriesStore";

const CategoriesUnification = () => {
  const { categoryAi, categoryBusiness, categoryCulture, categoryEntertainment, categoryHealth, categoryFetch } = useNewsAllCategoriesStore()

  // const { newsList: aiNewsList, newsFetch: aiNewsFetch } = useNewsByCategoryAiStore()
  // const { newsList: businessNewsList } = useNewsByCategoryBusinessStore()

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