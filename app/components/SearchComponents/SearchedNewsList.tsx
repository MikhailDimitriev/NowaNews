import React from 'react';
import SearchedNewsCard from "~/components/SearchComponents/SearchedNewsCard";
import type {ArticleStructureDTO} from "~/lib/api/types";

const SearchedNewsList = ({newsList}: {newsList: ArticleStructureDTO[]}) => {


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