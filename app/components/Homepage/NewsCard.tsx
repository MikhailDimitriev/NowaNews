import {useEffect, useState} from "react";
import type {Article} from "../../../types/global";
import {timeConverter} from "~/utils/timeConverter";
import {imageLoaderChecker} from "~/utils/imageLoaderChecker";
import {Link} from "react-router";

const NewsCard = (props: Article) => {
  const {
    article
  } = props

  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    imageLoaderChecker(article, setImageLoaded)
  }, []);

  const publishedAt = timeConverter(article)

  return (
    <li
      className="p-4 min-w-100 lg:min-w-auto snap-start"
    >
      <article>
        <Link to={article.url} className="flex items-top justify-start gap-4">
          <img
            className="object-cover aspect-square rounded-2xl h-30"
            src={imageLoaded ? `${article.image_url}` : `https://testonjob.ru/wp-content/uploads/2020/04/analiz-informacii-test-min-1024x597.png`}
            alt=""
            width="120"
            height="120"
            loading="lazy"
          />
          <div className="flex flex-col gap-4 justify-between ">
            <h3 className="font-semibold text-[clamp(1rem,0.96vw,1.125rem) max-h-2/3 text-overflow-3">{article.headline}</h3>
            <p className="hidden lg:block text-gray-500">{publishedAt}</p>
          </div>
        </Link>
      </article>
    </li>
  );
};

export default NewsCard;