import { Link } from "react-router";
import { useSingleNews } from "~/hooks/useSingleNews";
import type { SingleNewsCard } from "~/components/Homepage/types";

const LargeNewsCard = ({ imageUrl, src, title, description }: SingleNewsCard) => {
  const imageLoaded = useSingleNews(imageUrl)

  return (
    <div
      className="aspect-square p-8 bg-cover bg-center rounded-2xl flex flex-col justify-end"
      style={{
        backgroundImage: imageLoaded ?
          `linear-gradient(rgb(0 0 0 / 0), black 100%), url(${imageUrl})` :
          `linear-gradient(rgb(0 0 0 / 0), black 100%), url("https://testonjob.ru/wp-content/uploads/2020/04/analiz-informacii-test-min-1024x597.png")`,
      }}
    >
      <div className="h-full flex flex-col justify-between items-start gap-8">
        <div className="flex items-center text-white bg-pink-400 p-3 rounded-2xl hover:opacity-90 gap-2 self-end">
          <Link to={src} target="_blank">Open original</Link>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
            <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="large-news-text text-overflow-3 font-bold text-2xl">{title}</h2>
          <p className="large-news-text text-overflow-3 text-[16px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LargeNewsCard;