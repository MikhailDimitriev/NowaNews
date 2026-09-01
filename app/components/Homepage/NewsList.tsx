import React from 'react';
import NewsCard from "~/components/Homepage/NewsCard";
import {useNewsStore} from "~/context/useNewsStore";

const NewsList = () => {
  const { newsList } = useNewsStore()

  return (
    <ul className="flex flex-row lg:flex-col overflow-x-auto snap-x snap-proximity">
      {newsList.map((article) => (
        <NewsCard
          src={article.src}
          imageUrl={article.imageUrl}
          title={article.title}
          publishedAt={article.publishedAt}
          key={article.id}
          description={""}
          category={""}
        />
      ))}
    </ul>
  );
};

export default NewsList;