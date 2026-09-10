import React from 'react';
import type {Article} from "~/entities/article";
import {LargeNewsCard} from "~/entities/category-news";

const CategoryPageList = ({ newsList }: {newsList: Article[]}) => {
  return (
    <div className="inline-padding grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-5 md:gap-7 xl:gap-10 mt-7 xl:mt-10">
      {newsList.map((newsItem: Article) => (
        <LargeNewsCard
          key={newsItem.id}
          description={newsItem.description}
          src={newsItem.src}
          imageUrl={newsItem.imageUrl}
          title={newsItem.title}
        />
      ))}
    </div>
  );
};

export default CategoryPageList;