import { useState } from "react";
import {Link} from "react-router";
import type {HomepageNewsCardProps} from "./types";
import {checkIfImageLoaded} from "~/lib/utils/checkIfImageLoaded";

const HomepageNewsCategoryCard = ({ src, imageUrl, title, publishedAt }: HomepageNewsCardProps ) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <article>
      <Link to={src} className="flex justify-start gap-3 xl:gap-6">
        <img
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
          className="object-cover w-60 h-30 xl:h-40 xl:w-80 aspect-2/1 rounded-2xl"
          src={checkIfImageLoaded(imageLoaded, imageUrl)}
          alt="News image"
          width="320"
        />
        <div className="w-100 flex flex-col justify-between gap-4">
          <h3 className="font-semibold text-[clamp(1rem,0.96vw,1.125rem) text-overflow-3">
            {title}
          </h3>
          <p className="text-gray-500">{publishedAt}</p>
        </div>
      </Link>
    </article>
  );
};

export default HomepageNewsCategoryCard;