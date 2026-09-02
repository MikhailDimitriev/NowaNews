import React from 'react';
import LargeNewsCard from "~/components/CategoriesPages/LargeNewsCard";
import type {ArticleStructureDTO} from "~/lib/api/types";

const CategoriesRoutesElementByCategory = ( { newsList }: {newsList: ArticleStructureDTO[]}) => {
  return (
    <div className="inline-padding grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-5 md:gap-7 xl:gap-10 mt-7 xl:mt-10">
      {newsList.map((newsItem: ArticleStructureDTO) => (
        <LargeNewsCard
          description={newsItem.description}
          src={newsItem.src}
          imageUrl={newsItem.imageUrl}
          title={newsItem.title}
          publishedAt={newsItem.publishedAt}
        />
      ))}
    </div>
  );
};

export default CategoriesRoutesElementByCategory;