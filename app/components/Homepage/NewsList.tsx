import React from 'react';
import NewsCard from "~/components/Homepage/NewsCard";
import {useNewsListStore} from "~/context/useNewsListStore";

const NewsList = () => {
  const { newsList } = useNewsListStore()

  return (
    <ul className="flex flex-row lg:flex-col overflow-x-auto snap-x snap-proximity">
      {newsList.map((article) => (
        <NewsCard
          src={article.src}
          imageUrl={article.imageUrl}
          title={article.title}
          publishedAt={article.publishedAt}
          key={article.id}
        />
      ))}
    </ul>
  );
};

export default NewsList;