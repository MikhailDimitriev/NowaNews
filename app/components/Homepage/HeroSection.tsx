import FirstNewItem from "~/components/Homepage/FirstNewItem";
import NewsCard from "~/components/Homepage/NewsCard";
import {useEffect, useState} from "react";
import type {ArticleStructure} from "../../../types/global";
import {BASE_URL} from "~/routes/home";

const HeroSection = () => {
  const [newsList, setNewsList] = useState<ArticleStructure[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [firstNews, setFirstNews] = useState<ArticleStructure | undefined>(undefined)

  const newsFetch = async () => {
    setIsLoading(true)
    setErrorMessage('')
    try {
      const response = await fetch(`${BASE_URL}/articles?limit=5`, {method: "GET"})

      if (!response.ok) throw new Error("Failed to fetch data.")

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

  useEffect(() => {
    newsFetch()
  }, []);

  return (
    <section className="inline-padding mb-6 xl:mb-12">
      {isLoading ? (
        <p className="text-3xl">Loading...</p>
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

  );
};

export default HeroSection;