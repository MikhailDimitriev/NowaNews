import CategoriesSection from "~/components/Homepage/CategoriesSection";
import React, { useEffect } from "react";
import {useNewsCategoriesStore} from "~/context/useNewsCategoriesStore";

const CategoriesBody = () => {
  const { categoryAi, categoryBusiness, categoryCulture, categoryEntertainment, categoryHealth, categoryFetch } = useNewsCategoriesStore()

  useEffect(() => {
    categoryFetch('ai', 2)
    categoryFetch('business', 2)
    categoryFetch('culture', 2)
    categoryFetch('entertainment', 2)
    categoryFetch('health', 2)
  }, []);

  return (
    <>
      <CategoriesSection category={'ai'} articles={categoryAi} />
      <CategoriesSection category={'business'} articles={categoryBusiness} />
      <CategoriesSection category={'culture'} articles={categoryCulture} />
      <CategoriesSection category={'entertainment'} articles={categoryEntertainment} />
      <CategoriesSection category={'health'} articles={categoryHealth} />
    </>
  );
};

export default CategoriesBody;