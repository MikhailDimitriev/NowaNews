import { useEffect, useState } from "react";
import { Link } from "react-router";
import type {NewsCardProps} from "~/components/Homepage/types";

interface FirstNewsCardProps extends NewsCardProps {
  description: string;
  category: string;
}

const FirstNewsItem = ({ imageUrl, src, title, publishedAt, description, category }: FirstNewsCardProps ) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()

    img.src = imageUrl
    img.onload = () => setImageLoaded(true)
  }, []);

  return (
    <Link
      to={src ? src : '/'}
      className="p-12 gap-6 lg:w-2/3 bg-cover bg-center flex flex-col items-start justify-end rounded-2xl"
      style={{
        backgroundImage: imageLoaded ? `url(${imageUrl})` : `url("https://testonjob.ru/wp-content/uploads/2020/04/analiz-informacii-test-min-1024x597.png")`,
      }}
    >
      <p className="font-bold relative text-xl bg-pink-400/90 text-white p-3 rounded-2xl">{category.toUpperCase()}</p>
      <h2 className="first-new font-bold text-3xl!">{title}</h2>
      <p className="first-new">{description}</p>
      <p className="first-new">{publishedAt}</p>
    </Link>
  );
};

export default FirstNewsItem;