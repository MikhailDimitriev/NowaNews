import { Link } from "react-router";
import type { FirstNewsCardStructure } from "~/components/Homepage/types";
import { useSingleNews } from "~/hooks/useSingleNews";

const FirstNewsCard = ({ imageUrl, src, title, publishedAt, description, category }: FirstNewsCardStructure ) => {
  const imageLoaded = useSingleNews(imageUrl)

  return (
    <Link
      to={src}
      className="p-12 gap-6 lg:w-2/3 bg-cover bg-center flex flex-col items-start justify-end rounded-2xl"
      style={{
        backgroundImage: imageLoaded ?
          `linear-gradient(rgb(0 0 0 / 0), black 80%), url(${imageUrl})` :
          `linear-gradient(rgb(0 0 0 / 0), black 80%), url("https://testonjob.ru/wp-content/uploads/2020/04/analiz-informacii-test-min-1024x597.png")`,
      }}
    >
      <p className="font-bold relative text-xl bg-pink-400/90 text-white p-3 rounded-2xl">{category.toUpperCase()}</p>
      <h2 className="large-news-text max-w-4/5 font-bold text-3xl">{title}</h2>
      <p className="large-news-text max-w-4/5 text-overflow-3 text-xl">{description}</p>
      <p className="large-news-text max-w-4/5 text-xl">{publishedAt}</p>
    </Link>
  );
};

export default FirstNewsCard;