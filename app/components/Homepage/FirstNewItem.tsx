import type { FirstArticle } from "../../../types/global";
import { useEffect, useState } from "react";
import {timeConverter} from "~/utils/timeConverter";
import {imageLoaderChecker} from "~/utils/imageLoaderChecker";
import {Link} from "react-router";

const FirstNewItem = (props: FirstArticle) => {
  const {
    article
  } = props

  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (article) {
      imageLoaderChecker(article, setImageLoaded)
    }
  }, []);

  const publishedAt = article ? timeConverter(article) : null

  return (
    <Link
      to={article ? article.url : '/'}
      className="p-12 gap-6 lg:w-2/3 bg-cover bg-center flex flex-col items-start justify-end rounded-2xl"
      style={{
        backgroundImage: imageLoaded && article ? `url(${article.image_url})` : `url("https://testonjob.ru/wp-content/uploads/2020/04/analiz-informacii-test-min-1024x597.png")`,
      }}
    >
      <p className="font-bold relative text-xl bg-pink-400/90 text-white p-3 rounded-2xl">{article ? article.category.toUpperCase() : null}</p>
      <h2 className="first-new font-bold text-3xl!">{article ? article.headline : null}</h2>
      <p className="first-new">{article ? article.description : null}</p>
      <p className="first-new">{article ? publishedAt : null}</p>
    </Link>
  );
};

export default FirstNewItem;