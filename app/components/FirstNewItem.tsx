import type { FirstArticle, ArticleStructure } from "../../types/global";
import { useEffect, useState, useContext } from "react";
import {timeConverter} from "~/utils/timeConverter";
import {imageLoaderChecker} from "~/utils/imageLoaderChecker";

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
    <div
      className="p-12 gap-6 lg:w-2/3 bg-cover bg-center flex flex-col items-start justify-end rounded-2xl"
      style={{
        backgroundImage: imageLoaded && article ? `url(${article.image_url})` : `url("https://testonjob.ru/wp-content/uploads/2020/04/analiz-informacii-test-min-1024x597.png")`,
      }}
    >
      <p className="font-bold relative text-xl bg-pink-400/90 text-white p-3 rounded-2xl">{article ? article.category.toUpperCase() : null}</p>
      <h2 className="first-new-text-pointer text-shadow-pointer font-bold text-3xl">{article ? article.headline : null}</h2>
      <p className="first-new-text-pointer text-shadow-pointer text-xl">{article ? article.description : null}</p>
      <p className="first-new-text-pointer text-shadow-pointer text-xl">{article ? publishedAt : null}</p>
    </div>
  );
};

export default FirstNewItem;