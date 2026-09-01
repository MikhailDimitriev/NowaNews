import { useState } from "react";
import {Link} from "react-router";
import type { NewsCardProps } from "./types";

const HomepageNewsCategoryCard = ({ src, imageUrl, title, publishedAt }: NewsCardProps ) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <article>
      <Link to={src} className="flex justify-start gap-3 xl:gap-6">
        <img
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
          className="object-cover w-60 h-30 xl:h-40 xl:w-80 aspect-2/1 rounded-2xl"
          src={imageLoaded ? imageUrl : `https://testonjob.ru/wp-content/uploads/2020/04/analiz-informacii-test-min-1024x597.png`}
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