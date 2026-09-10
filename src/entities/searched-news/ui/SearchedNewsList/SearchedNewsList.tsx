import React from 'react';
import type {Article} from "~/entities/article";
import {SearchedNewsCard} from "~/entities/searched-news";

const SearchedNewsList = ({newsList}: {newsList: Article[]}) => {

  return (
    <ul className="">
      {newsList.map((article) => (
        <li key={article.id} className="p-4">
          <SearchedNewsCard src={article.src} title={article.title} imageUrl={article.imageUrl} />
        </li>
      ))}
    </ul>
  );
};

export default SearchedNewsList;