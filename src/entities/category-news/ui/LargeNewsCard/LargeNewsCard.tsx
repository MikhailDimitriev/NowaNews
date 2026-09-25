import { useSingleNews } from "~/shared/hooks/useSingleNews";
import OpenOriginalLink from "~/shared/ui/OpenOriginalLink/OpenOriginalLink";
import {
  checkIfBackgroundImageLoaded
} from "~/shared/lib/utils/checkIfBackgroundImageLoaded";
import type {
  LargeNewsProps
} from "~/entities/category-news/model/LargeNewsProps";

const LargeNewsCard = ({ imageUrl, src, title, description }: LargeNewsProps) => {
  const imageLoaded = useSingleNews(imageUrl)

  return (
      <div
        style={checkIfBackgroundImageLoaded(imageLoaded, imageUrl)}
        className="h-full flex flex-col justify-between items-start gap-4 aspect-square p-4 md:p-8 bg-cover bg-center rounded-2xl"
      >
        <OpenOriginalLink
          src={src}
        />
        <div className="flex flex-col gap-2">
          <h2 className="large-news-text text-overflow-3 font-bold text-2xl text-balance">{title}</h2>
          <p className="large-news-text text-overflow-3 text-[16px] text-balance">{description}</p>
        </div>
      </div>
  );
};

export default LargeNewsCard;