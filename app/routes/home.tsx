import type { Route } from "./+types/home";
import {useEffect, useState} from "react";
import NewsCard from "~/components/NewsCard";
import FirstNewItem from "~/components/FirstNewItem";
import type {ArticleStructure} from "../../types/global";
import CategoriesSection from "~/components/CategoriesSection";

const BASE_URL = `https://noozra.com/api`

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NowaNews" },
    { name: "description", content: "Here you can find all news around the world." },
  ];
}

export default function Home() {
  const [newsList, setNewsList] = useState<ArticleStructure[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [firstNews, setFirstNews] = useState<ArticleStructure | undefined>(undefined)
  const [categoryAi, setCategoryAi] = useState<ArticleStructure[]>([])
  const [categoryBusiness, setCategoryBusiness] = useState<ArticleStructure[]>([])
  const [categoryCulture, setCategoryCulture] = useState<ArticleStructure[]>([])
  const [categoryEntertainment, setCategoryEntertainment] = useState<ArticleStructure[]>([])
  const [categoryHealth, setCategoryHealth] = useState<ArticleStructure[]>([])

  const newsFetch = async () => {
    setIsLoading(true)
    setErrorMessage('')
    try {
      const response = await fetch(`${BASE_URL}/articles?limit=5`, {method: "GET"})

      if (!response.ok) {
        throw new Error("Failed to fetch data.")
      }

      const fetchedArticles: DataFetch = await response.json()

      if (fetchedArticles.articles.length > 0) {
        const [first, ...rest] = fetchedArticles.articles
        setFirstNews(first)
        setNewsList(rest)
      } else {
        setNewsList([])
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

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
    newsFetch()
    categoriesFetch()
  }, []);

  return (
    <>
      <main className="xl:mt-8 lg:mt-6 mt-4">
        <div>
          <section className="inline-padding mb-6 xl:mb-12">
            {isLoading ? (
              <p>Loading...</p>
            ) : errorMessage ? (
              <p>{errorMessage}</p>
            ) : (
              <div className="flex flex-col lg:flex-row justify-between 2xl:gap-10 xl:gap-8 gap-6">
                <FirstNewItem
                  article={firstNews}
                />
                <div className="flex flex-col lg:flex-col bg-white rounded-2xl lg:w-1/3">
                  <h2 className="font-semibold text-2xl p-[1rem_1rem_0]">Recent news</h2>
                  <ul className="flex flex-row lg:flex-col overflow-x-auto snap-x snap-proximity">
                    {newsList.map((article) => (
                      <NewsCard
                        article={article}
                        key={article.id}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>

          <CategoriesSection category={'ai'} articles={categoryAi} />
          <CategoriesSection category={'business'} articles={categoryBusiness} />
          <CategoriesSection category={'culture'} articles={categoryCulture} />
          <CategoriesSection category={'entertainment'} articles={categoryEntertainment} />
          <CategoriesSection category={'health'} articles={categoryHealth} />

        </div>
      </main>
    </>
  );
}