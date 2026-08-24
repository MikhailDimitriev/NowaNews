import {timeConverter} from "~/utils/timeConverter";
import {useEffect, useState} from "react";
import {imageLoaderChecker} from "~/utils/imageLoaderChecker";
import {Link} from "react-router";

const HomepageCategoryCard = ( { article }: { article: ArticleStructure } ) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const publishedAt = timeConverter(article)

  useEffect(() => {
    imageLoaderChecker(article, setImageLoaded)
  }, []);

  return (
    <article>
      <Link to={article.url} className="flex justify-start gap-3 xl:gap-6">
        <img
          className="object-cover h-30 xl:h-40 aspect-2/1 rounded-2xl"
          src={imageLoaded ? article.image_url : `https://testonjob.ru/wp-content/uploads/2020/04/analiz-informacii-test-min-1024x597.png`}
          alt=""
          width="320"
          loading="lazy"
        />
        <div className="w-100 flex flex-col justify-between gap-4">
          <h3 className="font-semibold text-[clamp(1rem,0.96vw,1.125rem) text-overflow-3">
            {article.headline}
          </h3>
          <p className="text-gray-500">{publishedAt}</p>
        </div>
      </Link>
    </article>
  );
};

export default HomepageCategoryCard;