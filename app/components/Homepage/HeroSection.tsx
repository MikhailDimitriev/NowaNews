import FirstNewsItem from "~/components/Homepage/FirstNewsItem";
import { useEffect } from "react";
import { useNewsStore } from "~/context/useNewsStore";
import NewsList from "~/components/Homepage/NewsList";

const HeroSection = () => {
  const { firstNews, isLoading, errorMessage, newsFetch } = useNewsStore()

  useEffect(() => {
    newsFetch()
  }, []);

  return (
    <section className="inline-padding mb-6 xl:mb-12">
      {isLoading ? (
        <div className="flex justify-center">
          <img
            className="text-center"
            src="/loading.gif"
            alt=""
            width={"100"}
            height={"100"}
          />
        </div>
      ) : errorMessage ? (
        <p className="text-3xl p-10">{errorMessage}</p>
      ) : (
        <div className="flex flex-col lg:flex-row justify-between 2xl:gap-10 xl:gap-8 gap-6">
          <FirstNewsItem
            imageUrl={firstNews.imageUrl}
            src={firstNews.src}
            title={firstNews.title}
            publishedAt={firstNews.publishedAt}
            description={firstNews.description}
            category={firstNews.category}
          />
          <div className="dark-mode-bg-alt bg-white flex flex-col lg:flex-col rounded-2xl lg:w-1/3">
            <h2 className="font-semibold text-2xl p-[1rem_1rem_0]">Recent news</h2>
            <NewsList />
          </div>
        </div>
      )}
    </section>

  );
};

export default HeroSection;