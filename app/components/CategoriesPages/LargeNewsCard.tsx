import { useSingleNews } from "~/hooks/useSingleNews";
import type { SingleNewsCard } from "~/components/Homepage/types";
import MoveToSourceLink from "~/components/MoveToSourceLink";
import {
  checkIfBackgroundImageLoaded
} from "~/lib/utils/checkIfBackgroundImageLoaded";

const LargeNewsCard = ({ imageUrl, src, title, description }: SingleNewsCard) => {
  const imageLoaded = useSingleNews(imageUrl)

  return (
    <div
      className="aspect-square p-8 bg-cover bg-center rounded-2xl flex flex-col justify-end"
      style={checkIfBackgroundImageLoaded(imageLoaded, imageUrl)}
    >
      <div className="h-full flex flex-col justify-between items-start gap-4">
        <MoveToSourceLink
          src={src}
        />
        <div className="flex flex-col gap-2">
          <h2 className="large-news-text text-overflow-3 font-bold text-2xl">{title}</h2>
          <p className="large-news-text text-overflow-3 text-[16px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LargeNewsCard;