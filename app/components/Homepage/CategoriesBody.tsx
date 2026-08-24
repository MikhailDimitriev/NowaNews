import CategoriesSection from "~/components/Homepage/CategoriesSection";
import {useEffect, useState} from "react";
import {BASE_URL} from "~/routes/home";

const CategoriesBody = () => {
  const [categoryAi, setCategoryAi] = useState<ArticleStructure[]>([])
  const [categoryBusiness, setCategoryBusiness] = useState<ArticleStructure[]>([])
  const [categoryCulture, setCategoryCulture] = useState<ArticleStructure[]>([])
  const [categoryEntertainment, setCategoryEntertainment] = useState<ArticleStructure[]>([])
  const [categoryHealth, setCategoryHealth] = useState<ArticleStructure[]>([])

  const categoriesFetch = async () => {
    try {
      const [responseAi, responseBusiness, responseCulture, responseEntertainment, responseHealth] = await Promise.all([
        fetch(`${BASE_URL}/articles?category=ai&limit=2`, {method: "GET"}),
        fetch(`${BASE_URL}/articles?category=business&limit=2`, {method: "GET"}),
        fetch(`${BASE_URL}/articles?category=culture&limit=2`, {method: "GET"}),
        fetch(`${BASE_URL}/articles?category=entertainment&limit=2`, {method: "GET"}),
        fetch(`${BASE_URL}/articles?category=health&limit=2`, {method: "GET"}),
      ])

      if (!responseAi.ok || !responseBusiness.ok || !responseCulture.ok || !responseEntertainment.ok || !responseHealth.ok) {
        throw new Error("Failed to fetch data.")
      }

      const [fetchedAi, fetchedBusiness, fetchedCulture, fetchedEntertainment, fetchedHealth]: [DataFetch, DataFetch, DataFetch, DataFetch, DataFetch] = await Promise.all([
        responseAi.json(),
        responseBusiness.json(),
        responseCulture.json(),
        responseEntertainment.json(),
        responseHealth.json(),
      ])

      setCategoryAi(fetchedAi.articles)
      setCategoryBusiness(fetchedBusiness.articles)
      setCategoryCulture(fetchedCulture.articles)
      setCategoryEntertainment(fetchedEntertainment.articles)
      setCategoryHealth(fetchedHealth.articles)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    categoriesFetch()
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