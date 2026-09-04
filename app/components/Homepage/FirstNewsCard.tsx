import { useSingleNews } from "~/hooks/useSingleNews";
import OpenOriginalLink from "~/components/OpenOriginalLink";
import {
  checkIfBackgroundImageLoaded
} from "~/lib/utils/checkIfBackgroundImageLoaded";
import {useNewsListStore} from "~/context/useNewsListStore";

const FirstNewsCard = () => {
  const { firstNews } = useNewsListStore()
  const { imageUrl, src, title, publishedAt, description, category } = firstNews

  const imageLoaded = useSingleNews(imageUrl)

  return (
    <div
      className="p-12 gap-6 lg:w-2/3 bg-cover bg-center flex flex-col items-start justify-end rounded-2xl"
      style={checkIfBackgroundImageLoaded(imageLoaded, imageUrl)}
    >
      <p className="font-bold relative text-xl bg-pink-400/90 text-white p-3 rounded-2xl">{category.toUpperCase()}</p>
      <h2 className="large-news-text max-w-4/5 font-bold text-3xl">{title}</h2>
      <p className="large-news-text max-w-4/5 text-overflow-3 text-xl">{description}</p>
      <div className="w-full flex justify-between items-center">
        <p className="large-news-text max-w-4/5 text-xl">{publishedAt}</p>
        <OpenOriginalLink src={src} />
      </div>
    </div>
  );
};

export default FirstNewsCard;