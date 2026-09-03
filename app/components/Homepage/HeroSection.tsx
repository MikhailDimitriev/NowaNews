import { useEffect } from "react";
import { useNewsListStore } from "~/context/useNewsListStore";
import HeroSectionBody from "~/components/Homepage/HeroSectionBody";

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
            src="/loading.gif"
            alt=""
            width={"100"}
            height={"100"}
          />
        </div>
      ) : errorMessage ? (
        <p className="text-3xl p-10">{errorMessage}</p>
      ) : (
        <HeroSectionBody />
      )}
    </section>

  );
};

export default HeroSection;