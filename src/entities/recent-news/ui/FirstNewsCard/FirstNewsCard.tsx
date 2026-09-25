import { useSingleNews } from "~/shared/hooks/useSingleNews";
import {
  checkIfBackgroundImageLoaded
} from "~/shared/lib/utils/checkIfBackgroundImageLoaded";
import {
  useNewsListStore
} from "~/entities/recent-news/model/store/useNewsListStore";
import OpenOriginalLink from "~/shared/ui/OpenOriginalLink";

const FirstNewsCard = () => {

  const { firstNews } = useNewsListStore();
  const { imageUrl, src, title, publishedAt, description, category } = firstNews

  const imageLoaded = useSingleNews(imageUrl)

  return (
    <div
      className="p-6 md:p-12 gap-6 lg:w-2/3 bg-cover bg-center flex flex-col items-start justify-end rounded-2xl"
      style={checkIfBackgroundImageLoaded(imageLoaded, imageUrl)}
    >
      <p className="font-bold relative text-xl bg-pink-400/90 text-white p-3 rounded-2xl">{category.toUpperCase()}</p>
      <h2 className="large-news-text max-w-4/5 font-bold text-3xl text-balance">{title}</h2>
      <p className="large-news-text max-w-4/5 text-overflow-3 text-xl text-balance">{description}</p>
      <div className="w-full flex justify-between items-center gap-2">
        <p className="large-news-text max-w-4/5 md:text-xl">{publishedAt}</p>
        <OpenOriginalLink src={src} />
      </div>
    </div>
  );
};

export default FirstNewsCard;