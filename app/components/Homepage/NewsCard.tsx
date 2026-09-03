import { useState } from "react";
import {Link} from "react-router";
import type { HomepageNewsCardProps } from "./types";
import {checkIfImageLoaded} from "~/lib/utils/checkIfImageLoaded";

const NewsCard = ({ src, imageUrl, title, publishedAt }: HomepageNewsCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <li
      className="p-4 min-w-100 lg:min-w-auto snap-start"
    >
      <article>
        <Link to={src} className="flex items-top justify-start gap-4">
          <img
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
            className="object-cover aspect-square rounded-2xl h-30"
            src={checkIfImageLoaded(imageLoaded, imageUrl)}
            alt="News image"
            width="120"
            height="120"
          />
          <div className="flex flex-col gap-4 justify-between ">
            <h3 className="font-semibold text-[clamp(1rem,0.96vw,1.125rem) max-h-2/3 text-overflow-3">{title}</h3>
            <p className="hidden lg:block text-gray-500">{publishedAt}</p>
          </div>
        </Link>
      </article>
    </li>
  );
};

export default NewsCard;