import { useEffect } from "react";
import { useNewsListStore } from "~/entities/recent-news/model/store/useNewsListStore";
import {RecentNews} from "~/entities/recent-news";
import loading from "/src/shared/assets/icons/loading.gif"

const HeroSection = () => {
  const { isLoading, errorMessage, newsFetch } = useNewsListStore()

  useEffect(() => {
    newsFetch()
  }, []);

  return (
    <section className="inline-padding mb-6 xl:mb-12">
      {isLoading ? (
        <div className="flex justify-center">
          <img
            className="text-center"
            src={loading}
            alt=""
            width={"100"}
            height={"100"}
          />
        </div>
      ) : errorMessage ? (
        <p className="text-3xl p-10">{errorMessage}</p>
      ) : (
        <RecentNews />
      )}
    </section>

  );
};

export default HeroSection;