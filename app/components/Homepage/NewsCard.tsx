import { useState } from "react";
import {Link} from "react-router";
import type {NewsCardProps} from "./types";

const NewsCard = ({ src, imageUrl, title, publishedAt }: NewsCardProps) => {
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
            src={imageLoaded ? `${imageUrl}` : `https://testonjob.ru/wp-content/uploads/2020/04/analiz-informacii-test-min-1024x597.png`}
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